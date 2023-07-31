import * as S from "./styles";

type Props = {
  profile: any;
  isLoading: boolean;
};

export default function PreviewEmail({ profile, isLoading }: Props) {
  const { email } = profile;

  return (
    <S.PreviewEmailWrapper as={"p"} isLoading={isLoading}>
      {email}
    </S.PreviewEmailWrapper>
  );
}
