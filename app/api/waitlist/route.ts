import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/app/lib/supabase';
import { isValidEmail, isWorkEmail } from '@/app/lib/emailValidation';
import { sendConfirmationEmail } from '@/app/lib/emailService';
import { WaitlistResponse } from '@/app/types/waitlist';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const email = data.email?.trim().toLowerCase();

    // Validate email format
    if (!email || !isValidEmail(email)) {
      return NextResponse.json<WaitlistResponse>(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    const workEmail = isWorkEmail(email);

    // Check if email already exists in database
    const { data: existingSubmission, error: queryError } = await supabase
      .from('waitlist_submissions')
      .select('*')
      .eq('email', email)
      .single();

    if (queryError && queryError.code !== 'PGRST116') {
      // PGRST116 is "not found" error, which is fine
      console.error('Database query error:', queryError);
      return NextResponse.json<WaitlistResponse>(
        { success: false, error: 'Database error occurred.' },
        { status: 500 }
      );
    }

    // Handle existing email
    if (existingSubmission) {
      const now = new Date().toISOString();

      // If it's a work email and confirmed, they're already on the waitlist
      if (existingSubmission.is_work_email && existingSubmission.confirmed) {
        return NextResponse.json<WaitlistResponse>(
          {
            success: true,
            message: "You're already on the waitlist!",
            alreadyExists: true,
          },
          { status: 200 }
        );
      }

      // If it's a work email but not confirmed, resend confirmation
      if (existingSubmission.is_work_email && !existingSubmission.confirmed) {
        // Update timestamp
        await supabase
          .from('waitlist_submissions')
          .update({ updated_at: now })
          .eq('email', email);

        // Resend confirmation email
        if (existingSubmission.confirmation_token) {
          await sendConfirmationEmail({
            email,
            confirmationToken: existingSubmission.confirmation_token,
          });
        }

        return NextResponse.json<WaitlistResponse>(
          {
            success: true,
            message:
              "We've resent the confirmation email. Please check your inbox.",
            alreadyExists: true,
          },
          { status: 200 }
        );
      }

      // If it's a non-work email that already exists, update timestamp and show warning
      if (!existingSubmission.is_work_email) {
        await supabase
          .from('waitlist_submissions')
          .update({ updated_at: now })
          .eq('email', email);

        return NextResponse.json<WaitlistResponse>(
          {
            success: true,
            message: 'Please use your work email address to get access.',
            requiresWorkEmail: true,
          },
          { status: 200 }
        );
      }
    }

    // Create new submission
    const confirmationToken = randomUUID();
    const now = new Date().toISOString();

    const { error: insertError } = await supabase
      .from('waitlist_submissions')
      .insert({
        email,
        is_work_email: workEmail,
        confirmed: false,
        confirmation_token: confirmationToken,
        confirmation_sent_at: workEmail ? now : null,
        created_at: now,
        updated_at: now,
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json<WaitlistResponse>(
        { success: false, error: 'Failed to save email.' },
        { status: 500 }
      );
    }

    // Send confirmation email if it's a work email
    if (workEmail) {
      const emailResult = await sendConfirmationEmail({
        email,
        confirmationToken,
      });

      if (!emailResult.success) {
        console.error('Failed to send confirmation email:', emailResult.error);
        // Email stored but confirmation email failed
        return NextResponse.json<WaitlistResponse>(
          {
            success: true,
            message:
              'We had trouble sending confirmation email. We\'ll reach out soon.',
          },
          { status: 200 }
        );
      }

      return NextResponse.json<WaitlistResponse>(
        {
          success: true,
          message: 'Check your email for a confirmation link!',
        },
        { status: 200 }
      );
    } else {
      // Non-work email - stored but show warning message
      return NextResponse.json<WaitlistResponse>(
        {
          success: true,
          message: 'Please use your work email address to get access',
          requiresWorkEmail: true,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Waitlist submission failed:', error);
    return NextResponse.json<WaitlistResponse>(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
