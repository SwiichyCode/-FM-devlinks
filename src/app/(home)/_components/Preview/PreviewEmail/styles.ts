import styled from "styled-components";
import { SkeletonEmail } from "../styles";

export const PreviewEmailWrapper = styled(SkeletonEmail).withConfig({
  shouldForwardProp: (prop) =>
    !["isLoading", "isPreviewPage", "email"].includes(prop),
})<{ isPreviewPage: boolean; email: string }>`
  width: 100%;
  height: ${({ isLoading, email }) => (isLoading || !email ? "24px" : `auto`)};
  text-align: center;
  font-size: ${({ isPreviewPage }) => (isPreviewPage ? `16px` : `14px`)};
  line-height: ${({ isPreviewPage }) => (isPreviewPage ? `24px` : `21px`)};
  font-weight: 400;
  color: var(--grey);
  background: ${({ isLoading, email }) =>
    isLoading || !email ? null : `transparent`};
`;
