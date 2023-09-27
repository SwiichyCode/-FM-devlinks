import uuid from "@/utils/uuid";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button";

export default function CustomizeAddLink() {
  const { links, generateLink } = useUserProfile();

  const handleAddLink = () => {
    generateLink({ id: uuid(), platform: "", url: "" });
  };

  return (
    <Button
      text="+ Add new link"
      theme="secondary"
      onClick={links.length! < 5 ? handleAddLink : () => {}}
      disabled={links.length! < 5 ? false : true}
    />
  );
}
