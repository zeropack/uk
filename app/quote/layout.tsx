import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Custom Quote in 48 Hours",
  description:
    "Request a custom quote for your ABAP AS5810 certified home-compostable mailers. Low MOQ from 2,000 units. Fast, transparent pricing.",
  openGraph: {
    title: "Get Your Custom Quote in 48 Hours | Zero Pack",
    description:
      "Request a custom quote for ABAP AS5810 certified home-compostable mailers. Low MOQ from 2,000 units.",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
