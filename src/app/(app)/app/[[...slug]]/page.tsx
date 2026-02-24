"use client";

/**
 * SPA shell — Next.js serves this page for every /app/* URL via the optional
 * catch-all segment [[...slug]].
 *
 * Must be a Client Component so we can use `next/dynamic` with `ssr: false`.
 * `ssr: false` is required because React Router's createBrowserRouter reads
 * window.location at init time, which doesn't exist in a Node.js SSR context.
 *
 * Deep-link flow (e.g. user opens /app/dashboard directly):
 *   1. Next.js matches [[...slug]] → renders the loading fallback (SSR)
 *   2. JS bundle loads → AppRouter mounts, reads window.location.pathname
 *   3. React Router renders the correct SPA route client-side
 */
import dynamic from "next/dynamic";

const AppRouter = dynamic(() => import("@/components/app/AppRouter"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
      <span className="text-sm text-zinc-400">Loading app…</span>
    </div>
  ),
});

export default function AppPage() {
  return <AppRouter />;
}
