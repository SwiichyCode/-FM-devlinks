"use client";
import { AuthLayoutWrapper } from "@/layouts/AuthLayout";
import Logo from "@/components/Logo";

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
