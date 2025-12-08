import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/app/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    // Validate token parameter
    if (!token) {
      return NextResponse.redirect(
        new URL('/?error=invalid-token', req.url)
      );
    }

    const supabase = createServerSupabaseClient();

    // Find submission with matching confirmation token
    const { data: submission, error: queryError } = await supabase
      .from('waitlist_submissions')
      .select('*')
      .eq('confirmation_token', token)
      .single();

    if (queryError || !submission) {
      console.error('Confirmation token not found:', queryError);
      return NextResponse.redirect(
        new URL('/?error=invalid-token', req.url)
      );
    }

    // If already confirmed, redirect to confirmation page anyway
    if (submission.confirmed) {
      return NextResponse.redirect(new URL('/confirmed', req.url));
    }

    // Update submission to mark as confirmed
    const { error: updateError } = await supabase
      .from('waitlist_submissions')
      .update({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('confirmation_token', token);

    if (updateError) {
      console.error('Failed to update confirmation status:', updateError);
      return NextResponse.redirect(
        new URL('/?error=confirmation-failed', req.url)
      );
    }

    // Redirect to confirmation success page
    return NextResponse.redirect(new URL('/confirmed', req.url));
  } catch (error) {
    console.error('Confirmation error:', error);
    return NextResponse.redirect(
      new URL('/?error=confirmation-failed', req.url)
    );
  }
}
