import Header from "@/components/layouts/Header";
import MainLayout from "@/layouts/MainLayout";
import Preview from "@/app/(home)/_components/Preview";
import ProtectedRoute from "@/layouts/ProtectedRoute";

type Props = {
  children: React.ReactNode;
};

export const dynamic = "force-dynamic";

export default async function Layout({ children }: Props) {
  return (
    <ProtectedRoute>
      <Header />
      <MainLayout>
        {/* <Preview /> */}
        {children}
      </MainLayout>
    </ProtectedRoute>
  );
}
