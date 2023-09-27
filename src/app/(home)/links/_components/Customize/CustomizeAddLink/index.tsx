import uuid from "@/utils/uuid";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button";

type Props = {
  setLinksChanged: (value: boolean) => void;
};

export default function CustomizeAddLink({ setLinksChanged }: Props) {
  const { links, generateLink } = useUserProfile();

  const handleAddLink = () => {
    generateLink({ id: uuid(), platform: "", url: "" });
    setLinksChanged(true);
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
