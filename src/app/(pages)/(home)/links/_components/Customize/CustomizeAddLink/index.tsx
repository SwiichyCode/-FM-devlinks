import uuid from "@/app/utils/uuid";
import Button from "@/app/components/Button";
import { Links } from "@/app/(pages)/(home)/links/_types/links.type";

type Props = {
  links: Links[];
  addLink: (link: Links) => void;
};

export default function CustomizeAddLink({ links, addLink }: Props) {
  const handleAddLink = () => {
    addLink({ id: uuid(), name: "", url: "" });
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
