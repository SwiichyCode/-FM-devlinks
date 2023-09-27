import capitalizeFirstLetterOfEachWord from "@/utils/capitalizeFirstLetterOfEachWord";
import * as S from "./styles";

type Props = {
  firstname: string;
  lastname: string;
  isLoading?: boolean;
  isPreviewPage?: boolean;
};

export default function PreviewFullName({
  firstname,
  lastname,
  isLoading,
  isPreviewPage = true,
}: Props) {
  const fullName = `${firstname} ${lastname}`;
  const fullNameCapitalized = capitalizeFirstLetterOfEachWord(fullName);

  return (
    <S.PreviewFullNameWrapper
      as={"p"}
      isLoading={isLoading}
      isPreviewPage={isPreviewPage}
    >
      {fullNameCapitalized}
    </S.PreviewFullNameWrapper>
  );
}
