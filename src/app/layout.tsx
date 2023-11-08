import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AppLayout from "@/layouts/AppLayout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "devlinks",
  description: "devlinks is a social media for developers",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
