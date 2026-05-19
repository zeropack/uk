import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Showcase",
  description:
    "See how UK brands are using Zero Pack's ABAP AS5810 certified home-compostable mailers to elevate their brand and reduce environmental impact.",
  openGraph: {
    title: "Customer Showcase | Zero Pack Success Stories",
    description:
      "Discover how forward-thinking UK brands are transforming their packaging with genuinely home-compostable mailers.",
  },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
