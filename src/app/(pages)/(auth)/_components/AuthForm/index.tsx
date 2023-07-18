import Form from "./Form";
import * as S from "./styles";

type Props = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  textLink: string;
  link: string;
  linkText: string;
  isLogin: boolean;
  urlRedirection: string;
};

export default function AuthForm({
  title,
  subtitle,
  buttonLabel,
  textLink,
  link,
  linkText,
  isLogin,
  urlRedirection,
}: Props) {
  return (
    <S.AuthFormWrapper>
      <S.AuthCard>
        <S.AuthCardHeader>
          <S.AuthCardTitle>{title}</S.AuthCardTitle>
          <S.AuthCardText>{subtitle}</S.AuthCardText>
        </S.AuthCardHeader>
        <Form
          isLogin={isLogin}
          urlRedirection={urlRedirection}
          buttonLabel={buttonLabel}
        />
        <S.AuthCardFooter>
          <S.AuthCardText>{textLink}</S.AuthCardText>
          <S.AuthCardLink href={link}>{linkText}</S.AuthCardLink>
        </S.AuthCardFooter>
      </S.AuthCard>
    </S.AuthFormWrapper>
  );
}
