import styled from "styled-components";
import { SkeletonFullName } from "../styles";

export const PreviewFullNameWrapper = styled(SkeletonFullName).withConfig({
  shouldForwardProp: (prop) =>
    !["isLoading", "isPreviewPage", "firstname"].includes(prop),
})<{ isPreviewPage: boolean; firstname: string }>`
  width: 100%;
  height: ${({ isLoading, firstname }) =>
    isLoading || !firstname ? "48px" : `auto`};
  text-align: center;
  font-size: ${({ isPreviewPage }) => (isPreviewPage ? `32px` : `18px`)};
  font-weight: ${({ isPreviewPage }) => (isPreviewPage ? `700` : `600`)};
  line-height: ${({ isPreviewPage }) => (isPreviewPage ? `48px` : `27px`)};
  color: var(--grey-800);
  background: ${({ isLoading, firstname }) =>
    isLoading || !firstname ? null : `transparent`};
`;
