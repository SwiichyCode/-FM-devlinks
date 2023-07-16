"use client";
import type { Metadata } from "next";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication page for DevLinks",
};

const AuthLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixins.flexCenter}
`;

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
