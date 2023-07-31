import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { URL } from "@/constants/url.constant";

type Props = {
  children: React.ReactNode;
};

export const dynamic = "force-dynamic";

export default async function ProtectedRoute({ children }: Props) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(URL.LOGIN);
  }

  return <>{children}</>;
}
