import styled from "styled-components";
import { SkeletonFullName } from "../styles";

export const PreviewFullNameWrapper = styled(SkeletonFullName).withConfig({
  shouldForwardProp: (prop) => !["isPreviewPage"].includes(prop),
})<{ isPreviewPage: boolean }>`
  width: 100%;
  height: auto;
  text-align: center;
  font-size: ${({ isPreviewPage }) => (isPreviewPage ? `3.2rem` : `1.8rem`)};
  font-weight: ${({ isPreviewPage }) => (isPreviewPage ? `700` : `600`)};
  line-height: ${({ isPreviewPage }) => (isPreviewPage ? `4.8rem` : `2.7rem`)};
  color: var(--grey-800);
  background-color: transparent;
`;
