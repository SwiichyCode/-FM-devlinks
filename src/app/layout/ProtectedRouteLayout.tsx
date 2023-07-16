"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { URL } from "@/app/constants/url.constant";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRouteLayout({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push(URL.LOGIN);
    }
  }, [router]);

  return <>{children}</>;
}
