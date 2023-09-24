import styled from "styled-components";
import { SkeletonEmail } from "../styles";

export const PreviewEmailWrapper = styled(SkeletonEmail).withConfig({
  shouldForwardProp: (prop) => !["isPreviewPage"].includes(prop),
})<{ isPreviewPage: boolean }>`
  width: 100%;
  height: auto;
  text-align: center;
  font-size: ${({ isPreviewPage }) => (isPreviewPage ? `1.6rem` : `1.4rem`)};
  line-height: ${({ isPreviewPage }) => (isPreviewPage ? `2.4rem` : `2.1rem`)};
  font-weight: 400;
  color: var(--grey);
  background-color: transparent;
`;
