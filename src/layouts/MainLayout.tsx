"use client";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

const MainLayoutWrapper = styled.main`
  min-height: calc(100vh - 94px - 48px - 24px);
  display: flex;
  gap: 24px;
  margin: 0 24px 24px 24px;
  border-radius: var(--rounded);
  background: var(--white);

  @media screen and (max-width: ${breakpoints.tablet}) {
    min-height: calc(100vh - 94px - 48px);
  }
`;

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
}
