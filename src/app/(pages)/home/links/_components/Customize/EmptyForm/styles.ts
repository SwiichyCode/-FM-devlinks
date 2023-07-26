import styled from "styled-components";
import Image from "next/image";
import { CustomizeTitle, CustomizeSubtitle } from "../CustomizeHeader/styles";

export const EmptyWrapper = styled.div`
  min-height: calc(48.5rem - 2.4rem - 4rem);
  ${({ theme }) => theme.mixins.flexColumnCenter};
  background-color: var(--grey-300);
  border-radius: var(--rounded);
  padding: 2rem;
  margin: 2.4rem 0 4rem 0;
  gap: 4rem;
`;

export const EmptyIllustration = styled(Image)``;

export const EmptyDescriptionWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumnCenter};
  text-align: center;
  gap: 2.4rem;
`;

export const EmptyDescriptionTitle = styled(CustomizeTitle)``;
export const EmptyDescriptionSubtitle = styled(CustomizeSubtitle)`
  max-width: 48.8rem;
`;
