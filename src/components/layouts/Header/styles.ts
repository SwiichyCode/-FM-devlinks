import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

export const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  ${({ theme }) => theme.mixins.flexBetween};
  border-radius: var(--rounded);
  background-color: var(--white);
  padding: 24px;
  margin: 24px;

  @media screen and (max-width: ${breakpoints.tablet}) {
    margin: 0 0 24px 0;
  }
`;

export const ButtonWrapper = styled.div`
  float: right;
  display: flex;
  gap: 16px;
`;
