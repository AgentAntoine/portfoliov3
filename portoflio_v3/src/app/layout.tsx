import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Mobbin — UI & UX design inspiration for mobile & web apps",
  description: "Save hours of UI & UX research with our library of 400,000+ fully searchable mobile & web app screenshots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
