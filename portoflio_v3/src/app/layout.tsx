import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Antoine Coudert — Product Builder",
  description: "Sp\u00E9cialiste du low-code et du d\u00E9veloppement sur mesure. Applications web, automatisations et int\u00E9grations IA.",
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
