"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const LogoWrapper = styled.div<{ buttonWrapperWidth?: number }>`
  width: ${({ buttonWrapperWidth }) => buttonWrapperWidth}px;
`;

type Props = {
  size: "small" | "large" | "mobile";
  buttonWrapperWidth?: number;
};

export default function Logo({ size, buttonWrapperWidth }: Props) {
  return (
    <LogoWrapper buttonWrapperWidth={buttonWrapperWidth}>
      <Link href="/">
        <Image
          src="/images/logo-devlinks-large.svg"
          width={size === "large" ? 182 : 146}
          height={size === "large" ? 40 : 32}
          alt="logo"
        />
      </Link>
    </LogoWrapper>
  );
}
