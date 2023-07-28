import dynamic from "next/dynamic";

const CustomizeLink = dynamic(() => import("./_components/Customize"), {
  ssr: false,
});

export default function Links() {
  return <CustomizeLink />;
}
