import Customize from "./_components/Customize";
import ProtectedRoute from "@/layouts/ProtectedRoute";

export const dynamic = "force-dynamic";

export default async function Links() {
  return (
    <ProtectedRoute>
      <Customize />
    </ProtectedRoute>
  );
}
