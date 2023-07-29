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
  max-width: calc(56rem - 4.8rem);
  min-height: 63.1rem;
  height: calc(100% - 4.8rem);
  ${({ theme }) => theme.mixins.flexCenter};
  border-radius: var(--rounded);
  background-color: var(--white);
  padding: 2.4rem;
  box-sizing: content-box;
`;

export const IllustrationMockup = styled.div`
  width: 100%;
  min-height: 63.1rem;
  ${({ theme }) => theme.mixins.flexColumnCenter};
  background: url("/images/illustration-phone-mockup.svg") no-repeat center
    center;
`;

export const PreviewResult = styled.div`
  width: 23.7rem;
  height: 51.4rem;
  ${({ theme }) => theme.mixins.flexColumnItems};
  gap: 5.6rem;
`;

export const PreviewHeader = styled.div`
  height: 15.8rem;
  ${({ theme }) => theme.mixins.flexColumnItems};
  margin-top: 0.5rem;
`;

export const SkeletonPicture = styled(SkeletonAnimation)`
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 50%;
  margin-bottom: 2.5rem;
`;

export const SkeletonFullName = styled(SkeletonAnimation)`
  width: 16rem;
  height: 1.6rem;
  border-radius: 10.4rem;
  margin-bottom: 1.3rem;
`;

export const SkeletonEmail = styled(SkeletonAnimation)`
  width: 7.2rem;
  height: 0.8rem;
  border-radius: 10.4rem;
`;

export const SkeletonLink = styled(SkeletonAnimation)`
  width: 100%;
  height: 4.4rem;
  border-radius: 0.8rem;
`;

export const PreviewLinks = styled.ul`
  ${({ theme }) => theme.mixins.flexColumn};
  width: 23.7rem;
  height: 30rem;
  gap: 2rem;
`;
