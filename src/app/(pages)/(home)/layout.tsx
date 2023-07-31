import dynamic from "next/dynamic";
import Header from "@/app/(pages)/(home)/_components/Header";
import ProtectedRouteLayout from "@/app/layouts/ProtectedRouteLayout";
import MainLayout from "@/app/layouts/MainLayout";

const Preview = dynamic(() => import("./_components/Preview"), {
  ssr: false,
});

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <ProtectedRouteLayout>
      <Header />
      <MainLayout>
        <Preview />
        {children}
      </MainLayout>
    </ProtectedRouteLayout>
  );
}
