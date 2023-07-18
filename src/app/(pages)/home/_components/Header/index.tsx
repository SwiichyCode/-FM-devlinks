import { useWindowSize } from "usehooks-ts";
import Logo from "@/app/components/common/Logo";
import Navigation from "../Navigation";
import Button from "@/app/components/common/button/Button";
import * as S from "./styles";

export default function Header() {
  const { width } = useWindowSize();

  return (
    <S.HeaderWrapper>
      <Logo size={width < 768 ? "mobile" : "small"} />
      <Navigation />
      <Button
        text={width < 768 ? null : "Preview"}
        iconSrc={width < 768 ? "/images/icon-preview-header.svg" : null}
        theme="secondary"
        minContentWidth={true}
      />
    </S.HeaderWrapper>
  );
}
