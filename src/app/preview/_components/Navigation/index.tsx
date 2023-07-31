import Button from "@/app/components/Button";
import * as S from "./styles";

export default function Navigation() {
  return (
    <S.NavigationWrapper>
      <Button
        text="Back to Editor"
        withLink
        href="/"
        theme="secondary"
        maxContentWidth
      />
      <Button text="Share link" theme="primary" maxContentWidth />
    </S.NavigationWrapper>
  );
}
