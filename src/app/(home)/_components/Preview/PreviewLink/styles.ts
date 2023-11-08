import styled from "styled-components";
import Image from "next/image";
import linkBackground from "@/utils/linkBackground";
import { SkeletonAnimation } from "../styles";
import Link from "next/link";

export const PreviewLinkWrapper = styled(SkeletonAnimation).withConfig({
  shouldForwardProp: (prop) =>
    !["isLoading", "name", "isPreviewPage"].includes(prop),
})<{ name: string; as: string; isPreviewPage: boolean }>`
  width: 100%;
  height: ${({ isPreviewPage, isLoading }) =>
    isPreviewPage ? isLoading && "56px" : "44px"};
  border-radius: 0.8rem;
  background-color: ${({ isLoading, name }) =>
    isLoading ? null : linkBackground(name)};
  color: ${({ name }) => (name === "frontendmentor" ? "#333" : "var(--white)")};
  border: ${({ isLoading, name }) =>
    !isLoading && name === "frontendmentor" ? "1px solid #D9D9D9" : "none"};
  padding: ${({ isPreviewPage }) => (isPreviewPage ? "16px" : "0 16px")};
`;

export const LinkWrapper = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["name"].includes(prop),
})<{ name: string }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ name }) => (name === "frontendmentor" ? "#333" : "var(--white)")};
  line-height: 24px;
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LinkIcon = styled(Image)``;

export const LinkName = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

export const ArrowRight = styled(Image)``;
