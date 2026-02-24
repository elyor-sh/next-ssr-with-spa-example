"use client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AppNav from "./AppNav";

// ---------------------------------------------------------------------------
// Route page components (inline for now — move to separate files as app grows)
// ---------------------------------------------------------------------------

function AppHome() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-2">App Home</h1>
      <p className="text-zinc-500">Welcome to the SPA shell powered by React Router.</p>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-zinc-500">This is a React Router route at /app/dashboard.</p>
    </main>
  );
}

function Settings() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-2">Settings</h1>
      <p className="text-zinc-500">This is a React Router route at /app/settings.</p>
    </main>
  );
}

// Shared layout for all /app/* routes — rendered as the parent Outlet
function AppLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <AppNav />
      <Outlet />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Router — created at module level (not inside the component) to avoid
// re-creation on every render.
//
// basename="/app" lets us write route paths relative to /app:
//   index  → /app
//   dashboard → /app/dashboard
// ---------------------------------------------------------------------------
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <AppHome /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ],
  { basename: "/app" }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
