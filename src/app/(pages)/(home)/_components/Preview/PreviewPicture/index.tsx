import * as S from "./styles";

type Props = {
  profile: any;
  isLoading: boolean;
};

export default function PreviewPicture({ profile, isLoading }: Props) {
  const { profilePicture } = profile;

  return (
    <S.PreviewPictureWrapper picture={profilePicture} isLoading={isLoading} />
  );
}
