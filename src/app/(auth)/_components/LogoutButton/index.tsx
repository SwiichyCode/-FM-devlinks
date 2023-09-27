"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import AuthService from "@/app/(auth)/_services/auth.service";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await AuthService.logout();

    localStorage.removeItem("user");
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
