"use client";

import { Link, useLocation } from "react-router";

/**
 * Navigation for SPA (app) pages.
 *
 * SPA → SPA:  <Link> from react-router  — client-side nav within React Router
 * SPA → SSR:  <a href>                  — hard navigation, crosses routing boundary
 */
export default function AppNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm ${
      isActive(path)
        ? "text-zinc-900 dark:text-zinc-100 font-medium"
        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
    }`;

  return (
    <nav className="flex items-center gap-6 px-8 py-4 border-b border-zinc-200 dark:border-zinc-800">
      <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mr-4">
        MyApp / Dashboard
      </span>

      {/* SPA → SPA: React Router Link handles client-side navigation within the SPA */}
      <Link to="/" className={linkClass("/app")}>
        Home
      </Link>
      <Link to="/dashboard" className={linkClass("/app/dashboard")}>
        Dashboard
      </Link>
      <Link to="/settings" className={linkClass("/app/settings")}>
        Settings
      </Link>

      <div className="ml-auto">
        {/*
          SPA → SSR: plain <a> triggers a full page load.
          Required because landing pages live in Next.js router —
          React Router has no knowledge of routes outside /app/*.
        */}
        <a
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← Back to site
        </a>
      </div>
    </nav>
  );
}
