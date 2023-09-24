import Button from "@/components/ui/Button";
import * as S from "./styles";

export default function Navigation() {
  const handleBackToEditor = () => {
    window.history.back();
  };

  return (
    <S.NavigationWrapper>
      <Button
        text="Back to Editor"
        theme="secondary"
        maxContentWidth
        onClick={handleBackToEditor}
      />
      <Button text="Share link" theme="primary" maxContentWidth />
    </S.NavigationWrapper>
  );
}
