"use client";
import AuthLayout from "@/layouts/AuthLayout";
import Logo from "@/components/ui/Logo";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthLayout>
      <Logo isAuth />
      {children}
    </AuthLayout>
  );
}
