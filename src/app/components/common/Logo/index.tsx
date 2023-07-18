"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

type Props = {
  size: "small" | "large" | "mobile";
};

const LogoMobileWrapper = styled.div`
  width: 52px;
`;

export default function Logo({ size }: Props) {
  return (
    <>
      {size === "mobile" && (
        <LogoMobileWrapper>
          <Link href="/">
            <Image
              src="/images/logo-devlinks-mobile.svg"
              width={32}
              height={32}
              alt="logo"
            />
          </Link>
        </LogoMobileWrapper>
      )}

      {size === "small" && (
        <Link href="/">
          <Image
            src="/images/logo-devlinks-large.svg"
            width={146}
            height={32}
            alt="logo"
          />
        </Link>
      )}

      {size === "large" && (
        <Link href="/">
          <Image
            src="/images/logo-devlinks-large.svg"
            width={182}
            height={40}
            alt="logo"
          />
        </Link>
      )}
    </>
  );
}
