"use client";
import Link from "next/link";
import styled from "styled-components";
import { useWindowSize } from "usehooks-ts";

const LogoWrapper = styled.div`
  float: left;
`;

type Props = {
  isAuth?: boolean;
  buttonWrapperWidth?: number;
};

export default function Logo({ isAuth }: Props) {
  const { width } = useWindowSize();

  return (
    <LogoWrapper>
      <Link href="/">
        {isAuth ? (
          <img src="/images/logo-devlinks-large.svg" alt="logo" />
        ) : (
          <img
            src={
              width > 1024
                ? "/images/logo-devlinks-large.svg"
                : "/images/logo-devlinks-mobile.svg"
            }
            alt="logo"
          />
        )}
      </Link>
    </LogoWrapper>
  );
}
