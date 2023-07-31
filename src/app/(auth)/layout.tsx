import type { Metadata } from "next";
import { AuthLayoutWrapper } from "@/layouts/AuthLayout";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication page for DevLinks",
};

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <AuthLayoutWrapper>
      <Logo size="large" />
      {children}
    </AuthLayoutWrapper>
  );
}
