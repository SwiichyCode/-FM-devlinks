"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Button
      text="Logout"
      theme="secondary"
      maxContentWidth
      onClick={handleLogout}
    />
  );
}
