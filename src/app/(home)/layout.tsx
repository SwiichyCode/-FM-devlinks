import Header from "@/app/(home)/_components/Header";
import MainLayout from "@/layouts/MainLayout";
import Preview from "@/app/(home)/_components/Preview";

type Props = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />
      <MainLayout>
        <Preview />
        {children}
      </MainLayout>
    </>
  );
}
