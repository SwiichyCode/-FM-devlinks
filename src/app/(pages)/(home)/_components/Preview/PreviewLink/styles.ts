import styled from "styled-components";
import Image from "next/image";
import linkBackground from "@/app/utils/linkBackground";
import { SkeletonAnimation } from "../styles";
import Link from "next/link";

export const PreviewLinkWrapper = styled(SkeletonAnimation).withConfig({
  shouldForwardProp: (prop) => !["name"].includes(prop),
})<{ name: string; as: string }>`
  width: 100%;
  height: 4.4rem;
  border-radius: 0.8rem;
  background-color: ${({ name }) => linkBackground(name)};
  color: ${({ name }) => (name === "frontendmentor" ? "#333" : "var(--white)")};
  border: ${({ name }) =>
    name === "frontendmentor" ? "1px solid #D9D9D9" : "none"};
  padding: 0 1.6rem;
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
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LinkIcon = styled(Image)``;

export const LinkName = styled.span`
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const ArrowRight = styled(Image)``;
