"use client";
import useFetchProfile from "../(home)/_hooks/useFetchProfile";
import ProfileCard from "./_components/ProfileCard";

export const dynamic = "force-dynamic";

export default function Preview() {
  const { data, isLoading } = useFetchProfile();

  return <ProfileCard data={data} isLoading={isLoading} />;
}
