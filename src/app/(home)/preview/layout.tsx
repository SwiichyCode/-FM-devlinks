"use client";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Header from "./_components/Header";

// const Preview = dynamic(() => import("./_components/Preview"), {
//   ssr: false,
// });

type Props = {
  children: React.ReactNode;
};

const PreviewLayoutWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default function PreviewLayout({ children }: Props) {
  return (
    <PreviewLayoutWrapper>
      <Header />

      {children}
    </PreviewLayoutWrapper>
  );
}
