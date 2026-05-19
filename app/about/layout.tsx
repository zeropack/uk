import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zero Pack",
  description:
    "Learn about Zero Pack's mission to make world-leading home compostable packaging accessible to growing UK brands. Founded on expertise and sustainability.",
  openGraph: {
    title: "About Zero Pack | Making Home Compostable Packaging Accessible",
    description:
      "Learn about our mission to combat greenwashing and make genuinely home compostable packaging accessible to growing brands.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
