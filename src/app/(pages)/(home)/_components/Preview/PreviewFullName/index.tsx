import * as S from "./styles";

type Props = {
  profile: any;
  isLoading: boolean;
};

export default function PreviewFullName({ profile, isLoading }: Props) {
  const { firstName, lastName } = profile;
  const fullName = `${firstName} ${lastName}`;

  return (
    <S.PreviewFullNameWrapper as={"p"} isLoading={isLoading}>
      {fullName}
    </S.PreviewFullNameWrapper>
  );
}
