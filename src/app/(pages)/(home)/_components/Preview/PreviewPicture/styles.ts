import styled from "styled-components";
import { SkeletonPicture } from "../styles";

export const PreviewPictureWrapper = styled(SkeletonPicture).withConfig({
  shouldForwardProp: (prop) => !["picture"].includes(prop),
})<{ picture: string }>`
  background-image: ${({ picture }) => `url(${picture})`};
  background-size: cover;
  background-position: center;
`;
