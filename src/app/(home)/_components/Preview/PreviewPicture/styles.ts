import styled from "styled-components";
import { SkeletonPicture } from "../styles";

export const PreviewPictureWrapper = styled(SkeletonPicture).withConfig({
  shouldForwardProp: (prop) => !["picture", "isPreviewPage"].includes(prop),
})<{ picture: string; isPreviewPage: boolean }>`
  ${({ isPreviewPage }) => isPreviewPage && `width: 10.4rem; height: 10.4rem`};
  background-image: ${({ picture }) => `url(${picture})`};
  background-size: cover;
  background-position: center;
`;
