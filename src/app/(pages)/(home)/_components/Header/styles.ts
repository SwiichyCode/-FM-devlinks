import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const HeaderWrapper = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  border-radius: var(--rounded);
  background-color: var(--white);
  padding: 2.4rem;
  margin: 2.4rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
`;
