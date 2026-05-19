import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Articles",
  description:
    "Expert guides and resources on home compostable packaging, ABAP AS5810 certification, EN13432 standards, and sustainable packaging for UK brands.",
  openGraph: {
    title: "Resources & Articles | Zero Pack",
    description:
      "Learn everything about home compostable packaging, certifications, and sustainable packaging solutions.",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
