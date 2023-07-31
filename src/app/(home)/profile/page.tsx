import Profile_ from "./_components/Profile";
import ProtectedRoute from "@/layouts/ProtectedRoute";

export const dynamic = "force-dynamic";

export default async function Profile() {
  return (
    <ProtectedRoute>
      <Profile_ />
    </ProtectedRoute>
  );
}
