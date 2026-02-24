import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export const dynamic = "force-static";

export default function PrivacyPolicyPage() {
  return (
    <main className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-lg text-zinc-500">Privacy policy content goes here.</p>
    </main>
  );
}
