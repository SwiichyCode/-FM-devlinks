"use client";
import styled from "styled-components";
import Header from "./_components/Header";

type Props = {
  children: React.ReactNode;
};

const HomeLayoutWrapper = styled.div``;

const MainWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 9.4rem - 4.8rem);
  padding: 0 2.4rem 2.4rem 2.4rem;
`;

export default function HomeLayout({ children }: Props) {
  return (
    <HomeLayoutWrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </HomeLayoutWrapper>
  );
}
