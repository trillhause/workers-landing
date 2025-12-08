import Link from 'next/link';

export default function ConfirmedPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Thank you for confirming your email!
        </h1>

        {/* Success Message */}
        <p className="text-xl text-zinc-400 mb-4">
          You&apos;re officially on the waitlist
        </p>

        {/* Additional Info */}
        <p className="text-lg text-zinc-500 mb-8">
          We&apos;ll reach out to you within the next few days with early access
          details and next steps.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

        {/* Additional Message */}
        <p className="text-zinc-400 mb-8">
          In the meantime, feel free to explore our landing page to learn more
          about what we&apos;re building.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Return to Homepage
        </Link>

        {/* Footer Note */}
        <p className="text-sm text-zinc-600 mt-12">
          Have questions? Feel free to reach out to us.
        </p>
      </div>
    </div>
  );
}
