"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const PreviewLayoutWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default function PreviewLayout({ children }: Props) {
  return <PreviewLayoutWrapper>{children}</PreviewLayoutWrapper>;
}
