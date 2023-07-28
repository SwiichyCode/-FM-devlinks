import dynamic from "next/dynamic";

const DynamicPreview = dynamic(() => import("../_components/Preview"), {
  ssr: false,
});

const DynamicCustomize = dynamic(() => import("./_components/Customize"), {
  ssr: false,
});

export default function Links() {
  return (
    <>
      <DynamicCustomize />
    </>
  );
}
