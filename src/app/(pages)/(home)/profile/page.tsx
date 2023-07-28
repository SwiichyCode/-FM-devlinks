import dynamic from "next/dynamic";

const ProfileDetails = dynamic(() => import("./_components/Profile"), {
  ssr: false,
});

export default function Profile() {
  return <ProfileDetails />;
}
