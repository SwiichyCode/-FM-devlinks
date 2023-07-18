"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { URL } from "@/app/constants/url.constant";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRouteLayout({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      if (pathname !== URL.LOGIN && pathname !== URL.SIGNUP) {
        router.push(URL.LOGIN);
      }
    }
  }, [pathname, router]);

  return <>{children}</>;
}
