import styled from "styled-components";
import Image from "next/image";

export const EmptyWrapper = styled.div`
  min-height: calc(485px - 24px - 40px);
  ${({ theme }) => theme.mixins.flexColumnCenter};
  background-color: var(--grey-300);
  border-radius: var(--rounded);
  padding: 20px;
  margin: 24px 0 40px 0;
  gap: 40px;
`;

export const EmptyIllustration = styled(Image)``;

export const EmptyDescriptionWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumnCenter};
  max-width: 488px;
  text-align: center;
  gap: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
