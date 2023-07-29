import uuid from "@/app/utils/uuid";
import Button from "@/app/components/Button";
import { Links } from "@/app/(pages)/(home)/_stores/useUserProfile";

type Props = {
  links: Links[];
  generateLink: (link: Links) => void;
};

export default function CustomizeAddLink({ links, generateLink }: Props) {
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
