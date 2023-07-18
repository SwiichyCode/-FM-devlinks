"use client";
import styled from "styled-components";
import Header from "./_components/Header";

type Props = {
  children: React.ReactNode;
};

const HomeLayoutWrapper = styled.div``;

export default function HomeLayout({ children }: Props) {
  return (
    <HomeLayoutWrapper>
      <Header />
      {children}
    </HomeLayoutWrapper>
  );
}
