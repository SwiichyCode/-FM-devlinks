import styled from "styled-components";

export const SkeletonAnimation = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isLoading"].includes(prop),
})<{ isLoading?: boolean }>`
  background: ${({ isLoading }) =>
    isLoading
      ? `linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)`
      : `#eeeeee`};
  ${({ isLoading }) => isLoading && `animation: 1s shine linear infinite; `};
  background-size: 200% 100%;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const PreviewContainer = styled.div`
  width: 100%;
  max-width: calc(560px - 48px);
  min-height: 631px;
  height: calc(100% - 48px);
  ${({ theme }) => theme.mixins.flexCenter};
  border-radius: var(--rounded);
  background-color: var(--white);
  padding: 24px;
  box-sizing: content-box;
`;

export const IllustrationMockup = styled.div`
  width: 100%;
  min-height: 631px;
  ${({ theme }) => theme.mixins.flexColumnCenter};
  background: url("/images/illustration-phone-mockup.svg") no-repeat center
    center;
`;

export const PreviewResult = styled.div`
  width: 237px;
  height: 514px;
  ${({ theme }) => theme.mixins.flexColumnItems};
  gap: 56px;
`;

export const PreviewHeader = styled.div`
  height: 158px;
  ${({ theme }) => theme.mixins.flexColumnItems};
  margin-top: 5px;
`;

export const SkeletonPicture = styled(SkeletonAnimation)`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 25px;
`;

export const SkeletonFullName = styled(SkeletonAnimation)`
  width: 160px;
  height: 16px;
  border-radius: 104px;
  margin-bottom: 13px;
`;

export const SkeletonEmail = styled(SkeletonAnimation)`
  width: 72px;
  height: 8px;
  border-radius: 104px;
`;

export const SkeletonLink = styled(SkeletonAnimation)`
  width: 100%;
  height: 44px;
  border-radius: 8px;
`;

export const PreviewLinks = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["isPreviewPage"].includes(prop),
})<{ isPreviewPage?: boolean }>`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 237px;
  height: ${({ isPreviewPage }) => (isPreviewPage ? "auto" : "300px")};
  gap: 20px;
  ${({ isPreviewPage }) => isPreviewPage && `margin-top: 56px;`};
`;
