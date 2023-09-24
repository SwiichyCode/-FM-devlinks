import * as S from "./styles";

type Props = {
  picture: string;
  isLoading?: boolean;
  isPreviewPage?: boolean;
};

export default function PreviewPicture({
  picture,
  isLoading,
  isPreviewPage = true,
}: Props) {
  return (
    <S.PreviewPictureWrapper
      picture={picture}
      isLoading={isLoading}
      isPreviewPage={isPreviewPage}
    />
  );
}
