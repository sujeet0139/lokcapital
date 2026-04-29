import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colloquial — Insights & Updates",
  description: "Interviews, news, blog posts, videos, and impact reports from Lok Capital.",
};

export default function ColloquialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
