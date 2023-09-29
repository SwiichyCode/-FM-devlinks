import Header from "./_components/Header";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import PreviewLayout from "@/layouts/PreviewLayout";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <ProtectedRoute>
      <PreviewLayout>
        <Header />

        {children}
      </PreviewLayout>
    </ProtectedRoute>
  );
}
