import type { Metadata } from "next";
import LandingNav from "@/components/landing/LandingNav";

export const metadata: Metadata = {
  title: {
    default: "MyApp",
    template: "%s | MyApp",
  },
  description: "MyApp — the best app ever.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <LandingNav />
      {children}
    </div>
  );
}
