"use client";
import { useRef } from "react";
import { useWindowSize } from "usehooks-ts";
import Logo from "@/components/ui/Logo";
import Navigation from "@/components/layouts/Navigation";
import Button from "@/components/ui/Button";
import LogoutButton from "../../../app/(auth)/_components/LogoutButton";
import * as S from "./styles";

export default function Header() {
  const { width } = useWindowSize();
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const buttonWrapperWidth = buttonWrapperRef.current?.offsetWidth;
  const showLogout = false;

  return (
    <S.HeaderWrapper>
      <Logo />
      <Navigation />
      <S.ButtonWrapper ref={buttonWrapperRef}>
        <Button
          text={width < 768 ? null : "Preview"}
          iconSrc={width < 768 ? "/images/icon-preview-header.svg" : null}
          theme="secondary"
          maxContentWidth
          withLink
          href="/preview"
        />
        {showLogout && <LogoutButton />}
      </S.ButtonWrapper>
    </S.HeaderWrapper>
  );
}
