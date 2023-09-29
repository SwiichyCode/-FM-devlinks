import styled from "styled-components";
import { SkeletonPicture } from "../styles";

export const PreviewPictureWrapper = styled(SkeletonPicture).withConfig({
  shouldForwardProp: (prop) =>
    !["isLoading", "picture", "isPreviewPage"].includes(prop),
})<{ picture: string; isPreviewPage: boolean }>`
  ${({ isPreviewPage }) => isPreviewPage && `width: 10.4rem; height: 10.4rem`};
  background-image: ${({ picture, isLoading }) =>
    !isLoading && `url(${picture})`};
  background-size: ${({ isLoading }) => !isLoading && `cover`};
  background-position: center;
`;
