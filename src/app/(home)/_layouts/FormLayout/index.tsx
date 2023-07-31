import * as S from "./styles";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function FormLayout({ title, subtitle, children }: Props) {
  return (
    <S.FormWrapper>
      <S.FormHeader>
        <S.FormTitle>{title}</S.FormTitle>
        <S.FormSubtitle>{subtitle}</S.FormSubtitle>
      </S.FormHeader>
      {children}
    </S.FormWrapper>
  );
}
