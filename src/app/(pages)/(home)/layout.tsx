"use client";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Header from "@/app/(pages)/(home)/_components/Header";

const Preview = dynamic(() => import("./_components/Preview"), {
  ssr: false,
});

type Props = {
  children: React.ReactNode;
};

const MainWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 9.4rem - 5rem);
  display: flex;
  gap: 24px;
  padding: 0 2.4rem 2.4rem 2.4rem;
`;

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />
      <MainWrapper>
        <Preview />
        {children}
      </MainWrapper>
    </>
  );
}
