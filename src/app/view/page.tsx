"use client";
import { useSearchParams } from "next/navigation";
import useFetchProfile from "@/app/(home)/_hooks/useFetchProfile";
import PreviewLayout from "@/layouts/PreviewLayout";
import Header from "../preview/_components/Header";
import ProfileCard from "../preview/_components/ProfileCard";

export default function ViewPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("user");
  const { data, isLoading } = useFetchProfile({ id: id });

  return (
    <PreviewLayout>
      <Header />
      <ProfileCard data={data} isLoading={isLoading} />
    </PreviewLayout>
  );
}
