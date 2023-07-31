// "use client";
// import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { URL } from "@/constants/url.constant";

type Props = {
  children: React.ReactNode;
};

export default async function ProtectedRouteLayout({ children }: Props) {
  // const pathname = usePathname();
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(URL.LOGIN);
  }

  // useEffect(() => {
  //   const token = localStorage.getItem("user");
  //   if (!token) {
  //     if (pathname !== URL.LOGIN && pathname !== URL.SIGNUP) {
  //       router.push(URL.LOGIN);
  //     }
  //   }
  // }, [pathname, router]);

  return <>{children}</>;
}
