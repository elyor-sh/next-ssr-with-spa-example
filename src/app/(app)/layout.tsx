import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Application",
  // Prevent search engines from indexing app pages
  robots: { index: false, follow: false },
};

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
