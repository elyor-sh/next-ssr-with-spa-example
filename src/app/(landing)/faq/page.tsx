import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

export const dynamic = "force-static";

export default function FaqPage() {
  return (
    <main className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-4">FAQ</h1>
      <p className="text-lg text-zinc-500">Frequently asked questions go here.</p>
    </main>
  );
}
