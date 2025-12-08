# Waitlist Setup Guide

This guide will walk you through setting up the complete waitlist functionality for your landing page.

## Overview

The waitlist system includes:
- Email validation (work email detection)
- Database storage with Supabase
- Confirmation emails via Resend
- Email confirmation flow
- Duplicate handling with timestamp updates

## Step 1: Set Up Supabase

### 1.1 Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - Project name: `workers-landing-waitlist` (or your preferred name)
   - Database password: Generate a strong password
   - Region: Choose closest to your users
5. Click "Create new project" and wait for it to initialize (2-3 minutes)

### 1.2 Create the Database Table

1. In your Supabase dashboard, go to the **SQL Editor** (left sidebar)
2. Click "New Query"
3. Paste the following SQL and click "Run":

```sql
CREATE TABLE waitlist_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  is_work_email BOOLEAN NOT NULL,
  confirmed BOOLEAN DEFAULT FALSE,
  confirmation_token TEXT UNIQUE,
  confirmation_sent_at TIMESTAMP,
  confirmed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_email ON waitlist_submissions(email);
CREATE INDEX idx_confirmation_token ON waitlist_submissions(confirmation_token);
```

### 1.3 Get Your Supabase Credentials

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click on **API** in the settings menu
3. Copy the following values:
   - **Project URL** → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key (click "Reveal" button) → This is your `SUPABASE_SERVICE_ROLE_KEY`

⚠️ **Important**: Keep the service_role key secure! Never commit it to version control or expose it to the client.

## Step 2: Set Up Resend

### 2.1 Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2.2 Get Your API Key

1. In the Resend dashboard, go to **API Keys**
2. Click "Create API Key"
3. Name it: `workers-landing-production` (or similar)
4. Click "Add"
5. Copy the API key → This is your `RESEND_API_KEY`

⚠️ **Important**: This key is only shown once! Save it immediately.

### 2.3 Configure Sending Domain (Optional for Development)

For development, you can use Resend's test domain (`onboarding@resend.dev`). However, for production:

1. Go to **Domains** in Resend dashboard
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS verification steps
5. Update the `from` field in `app/lib/emailService.ts`:

```typescript
from: 'Your App <noreply@yourdomain.com>',
```

## Step 3: Configure Environment Variables

### 3.1 Create .env.local File

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Resend Configuration
RESEND_API_KEY=re_your_api_key_here

# Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3.2 Add .env.local to .gitignore

Ensure `.env.local` is in your `.gitignore` file:

```bash
echo ".env.local" >> .gitignore
```

## Step 4: Test Locally

### 4.1 Start the Development Server

```bash
pnpm dev
```

### 4.2 Test the Waitlist Forms

1. Open [http://localhost:3000](http://localhost:3000)
2. Try submitting different email types:

#### Test Case 1: Personal Email (gmail.com)
- Enter: `test@gmail.com`
- Expected: Yellow warning message "Please use your work email address"
- Check Supabase: Email should be stored with `is_work_email=false`

#### Test Case 2: Work Email
- Enter: `test@yourcompany.com`
- Expected: Green success message "Check your email for a confirmation link!"
- Check Supabase: Email should be stored with `is_work_email=true`, `confirmed=false`
- Check your email: Should receive confirmation email

#### Test Case 3: Duplicate Work Email (Unconfirmed)
- Re-enter the same work email from Test Case 2
- Expected: Green success message "We've resent the confirmation email"
- Check Supabase: `updated_at` timestamp should be updated

#### Test Case 4: Duplicate Work Email (Confirmed)
- First, confirm the email from Test Case 2 by clicking the link
- Then try to submit the same email again
- Expected: Blue message "You're already on the waitlist!"

### 4.3 Test Email Confirmation

1. Check your inbox for the confirmation email
2. Click the "Confirm Email Address" button
3. Should redirect to `/confirmed` page
4. Check Supabase: `confirmed=true`, `confirmed_at` timestamp set

### 4.4 Verify Database

1. Go to your Supabase dashboard
2. Click **Table Editor** → **waitlist_submissions**
3. Verify your test submissions are showing up correctly

## Step 5: Deploy to Production

### 5.1 Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add all variables from your `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_BASE_URL` (use your production URL, e.g., `https://yourdomain.com`)

### 5.2 Update Email Configuration

1. Verify your domain in Resend (see Step 2.3)
2. Update `app/lib/emailService.ts` with your production email:
   ```typescript
   from: 'Your Product Name <noreply@yourdomain.com>',
   ```

### 5.3 Deploy

```bash
git add .
git commit -m "Add waitlist functionality"
git push
```

Vercel will automatically deploy your changes.

### 5.4 Test Production

1. Visit your production URL
2. Test the waitlist with a real email
3. Verify confirmation email is received
4. Click confirmation link and verify redirect to `/confirmed`

## Troubleshooting

### Issue: "Missing Supabase environment variables" Error

**Solution**:
- Double-check that all environment variables are set correctly
- Restart your dev server after adding variables
- Ensure variable names match exactly (case-sensitive)

### Issue: No Confirmation Email Received

**Solutions**:
1. Check spam/junk folder
2. Verify Resend API key is correct
3. Check Resend dashboard for error logs
4. Ensure `NEXT_PUBLIC_BASE_URL` is set correctly
5. For production, verify your sending domain in Resend

### Issue: "Database error occurred" Message

**Solutions**:
1. Verify Supabase table was created correctly
2. Check that service_role key has proper permissions
3. Look at browser console and server logs for detailed error
4. Verify Supabase project is not paused (free tier pauses after inactivity)

### Issue: Confirmation Link Not Working

**Solutions**:
1. Check that `NEXT_PUBLIC_BASE_URL` matches your actual URL
2. Verify the `/api/confirm` route is deployed
3. Check browser network tab for 404 or 500 errors
4. Look at server logs for database errors

### Issue: TypeScript Errors

If you see TypeScript errors about missing types:
```bash
# Restart TypeScript server in VS Code
# Or reinstall dependencies
pnpm install
```

## Database Queries

### View All Submissions
```sql
SELECT * FROM waitlist_submissions ORDER BY created_at DESC;
```

### Count by Status
```sql
SELECT
  COUNT(*) as total,
  COUNT(*) FILTER (WHERE is_work_email = true) as work_emails,
  COUNT(*) FILTER (WHERE confirmed = true) as confirmed
FROM waitlist_submissions;
```

### Export to CSV (in Supabase Dashboard)
1. Go to **Table Editor** → **waitlist_submissions**
2. Click the three dots menu → **Download as CSV**

## Next Steps

### Optional Enhancements

1. **Add Rate Limiting**: Prevent spam submissions
   ```bash
   pnpm add @upstash/ratelimit @upstash/redis
   ```

2. **Add Analytics**: Track conversion rates
   - Add Google Analytics or Posthog
   - Track form submissions, confirmation clicks

3. **Admin Dashboard**: View and manage submissions
   - Create a protected route `/admin/waitlist`
   - List all submissions with filtering
   - Export functionality

4. **Email Sequence**: Send follow-up emails
   - Welcome email after confirmation
   - Periodic updates about launch progress

5. **Referral System**: Let users invite friends
   - Generate unique referral links
   - Track referrals per user
   - Offer incentives for referrals

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check the server logs in Vercel dashboard
3. Verify all environment variables are set
4. Review the Supabase logs for database errors
5. Check Resend dashboard for email delivery logs

## Security Best Practices

✅ **Do**:
- Keep service role key secret
- Use environment variables for all credentials
- Add `.env.local` to `.gitignore`
- Validate all user inputs
- Use HTTPS in production

❌ **Don't**:
- Commit `.env.local` to version control
- Expose service role key to client-side code
- Skip email validation
- Allow unlimited submissions (add rate limiting)

## Files Modified/Created

### New Files
- `app/types/waitlist.ts` - TypeScript types
- `app/lib/supabase.ts` - Supabase client configuration
- `app/lib/emailValidation.ts` - Email validation utilities
- `app/lib/emailService.ts` - Resend email service
- `app/lib/emailTemplates/confirmationEmail.ts` - Email template
- `app/api/confirm/route.ts` - Confirmation API endpoint
- `app/confirmed/page.tsx` - Confirmation success page
- `.env.local.example` - Environment variables template

### Modified Files
- `app/api/waitlist/route.ts` - Complete rewrite with full logic
- `app/components/Hero.tsx` - Added form submission logic
- `app/components/FinalCTA.tsx` - Added form submission logic
- `package.json` - Added dependencies (supabase-js, resend, zod)

## Maintenance

### Regular Tasks
- Monitor Supabase usage (free tier limits)
- Monitor Resend email sending limits
- Review waitlist submissions weekly
- Clean up old unconfirmed submissions (optional)
- Back up waitlist data regularly

### Monitoring Queries
```sql
-- Submissions in last 24 hours
SELECT COUNT(*) FROM waitlist_submissions
WHERE created_at > NOW() - INTERVAL '24 hours';

-- Confirmation rate
SELECT
  ROUND(100.0 * COUNT(*) FILTER (WHERE confirmed = true) / COUNT(*), 2) as confirmation_rate_percent
FROM waitlist_submissions
WHERE is_work_email = true;
```

---

**Congratulations!** Your waitlist is now fully functional. Users can sign up, receive confirmation emails, and you can track all submissions in Supabase.
