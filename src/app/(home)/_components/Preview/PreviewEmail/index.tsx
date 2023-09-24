import * as S from "./styles";

type Props = {
  email: string;
  isLoading?: boolean;
  isPreviewPage?: boolean;
};

export default function PreviewEmail({
  email,
  isLoading,
  isPreviewPage = true,
}: Props) {
  return (
    <S.PreviewEmailWrapper
      as={"p"}
      isLoading={isLoading}
      isPreviewPage={isPreviewPage}
    >
      {email}
    </S.PreviewEmailWrapper>
  );
}
