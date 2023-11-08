import uuid from "@/utils/uuid";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button/Button";

type Props = {
  setLinksChanged: (value: boolean) => void;
};

export default function CustomizeAddLink({ setLinksChanged }: Props) {
  const { links, generateLink } = useUserProfile();

  const handleAddLink = () => {
    if (links.length! >= 5) return;

    generateLink({ id: uuid(), platform: "", url: "" });
    setLinksChanged(true);
  };

  return (
    <Button
      type="button"
      className="w-full"
      variant="secondary"
      onClick={handleAddLink}
      disabled={links.length! < 5 ? false : true}
    >
      + Add new link
    </Button>
  );
}
