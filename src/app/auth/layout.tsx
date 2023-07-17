"use client";
import type { Metadata } from "next";
import { breakpoints } from "@/app/styles/breakpoints";
import Logo from "../components/common/Logo";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication page for DevLinks",
};

const AuthLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  gap: 5.1rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3.2rem;
  }
`;

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <AuthLayoutWrapper>
      <Logo size="large" />
      {children}
    </AuthLayoutWrapper>
  );
}
