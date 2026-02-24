import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

// Explicitly static — no dynamic data, no revalidation needed
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to MyApp</h1>
      <p className="text-lg text-zinc-500 mb-8">
        A Next.js + React Router hybrid: statically rendered landing pages and
        a full SPA behind <code className="text-sm">/app</code>.
      </p>
      <a
        href="/app"
        className="inline-block px-6 py-3 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Get started →
      </a>
    </main>
  );
}
