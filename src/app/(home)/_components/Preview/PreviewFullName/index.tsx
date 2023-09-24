import capitalizeFirstLetterOfEachWord from "@/utils/capitalizeFirstLetterOfEachWord";
import * as S from "./styles";

type Props = {
  firstName: string;
  lastName: string;
  isLoading?: boolean;
  isPreviewPage?: boolean;
};

export default function PreviewFullName({
  firstName,
  lastName,
  isLoading,
  isPreviewPage = true,
}: Props) {
  const fullName = `${firstName} ${lastName}`;
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
