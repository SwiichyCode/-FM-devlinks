import { Heading, Paragraph } from "@/styles/typography";
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
        <Heading as={"h1"}>{title}</Heading>
        <Paragraph>{subtitle}</Paragraph>
      </S.FormHeader>
      {children}
    </S.FormWrapper>
  );
}
