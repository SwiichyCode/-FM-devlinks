"use client";
import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

const MainLayoutWrapper = styled.main`
  min-height: calc(100vh - 9.4rem - 4.8rem - 2.4rem);
  display: flex;
  gap: 24px;
  margin: 0 2.4rem 2.4rem 2.4rem;
  border-radius: var(--rounded);
  background: var(--white);

  @media screen and (max-width: ${breakpoints.tablet}) {
    min-height: calc(100vh - 9.4rem - 4.8rem);
  }
`;

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
}
