export interface WaitlistSubmission {
  id: string;
  email: string;
  is_work_email: boolean;
  confirmed: boolean;
  confirmation_token: string | null;
  confirmation_sent_at: string | null;
  confirmed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  requiresWorkEmail?: boolean;
  alreadyExists?: boolean;
  error?: string;
}
