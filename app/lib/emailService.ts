import { Resend } from 'resend';
import { confirmationEmailTemplate, confirmationEmailText } from './emailTemplates/confirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendConfirmationEmailParams {
  email: string;
  confirmationToken: string;
}

export async function sendConfirmationEmail({
  email,
  confirmationToken,
}: SendConfirmationEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const confirmationLink = `${baseUrl}/api/confirm?token=${confirmationToken}`;

    console.log( 'Sending confirmation email to:', email );
    console.log( 'Confirmation link:', confirmationLink );

    const { data, error } = await resend.emails.send({
      from: 'Millin @ Workers <millin@tagworkers.com>', // Replace with your verified domain in production
      to: [email],
      template: {
        id: 'email-confirmation',
        variables: {
          confirmationLink: confirmationLink,
        },
      },
    });

    if (error) {
      console.error('Failed to send confirmation email:', error);
      return { success: false, error: error.message };
    }

    console.log('Confirmation email sent successfully:', data);
    return { success: true };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}
