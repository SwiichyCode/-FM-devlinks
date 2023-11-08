import { Heading, Paragraph } from "@/styles/typography";
import * as S from "./styles";

export default function CustomizeEmpty() {
  return (
    <S.EmptyWrapper>
      <S.EmptyIllustration
        width={249}
        height={160}
        src="/images/illustration-empty.svg"
        alt="Illustration"
      />

      <S.EmptyDescriptionWrapper>
        <Heading as="h2">Let’s get you started</Heading>

        <Paragraph>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </Paragraph>
      </S.EmptyDescriptionWrapper>
    </S.EmptyWrapper>
  );
}
