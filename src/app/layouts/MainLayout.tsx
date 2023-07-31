"use client";
import styled from "styled-components";

const MainLayoutWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 9.4rem - 5rem);
  display: flex;
  gap: 24px;
  padding: 0 2.4rem 2.4rem 2.4rem;
`;

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
}
