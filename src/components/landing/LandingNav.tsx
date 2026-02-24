import Link from "next/link";

/**
 * Navigation for SSR (landing) pages.
 *
 * SSR → SSR:  <Link> from next/link   — client-side nav within Next.js router
 * SSR → SPA:  <a href>                — hard navigation, crosses routing boundary
 */
export default function LandingNav() {
  return (
    <nav className="flex items-center gap-6 px-8 py-4 border-b border-zinc-200 dark:border-zinc-800">
      <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mr-4">
        MyApp
      </span>

      {/* SSR → SSR: Next.js Link handles client-side navigation between landing pages */}
      <Link
        href="/"
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        About
      </Link>
      <Link
        href="/faq"
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        FAQ
      </Link>
      <Link
        href="/privacy-policy"
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        Privacy Policy
      </Link>

      <div className="ml-auto">
        {/*
          SSR → SPA: plain <a> triggers a full page load.
          Required because we're crossing from Next.js router to React Router —
          they are separate routing systems and cannot share client-side navigation.
        */}
        <a
          href="/app"
          className="text-sm font-medium px-4 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Open App →
        </a>
      </div>
    </nav>
  );
}
