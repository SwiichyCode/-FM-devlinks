import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@/styles/breakpoints";

export const AuthFormWrapper = styled.div`
  width: 100%;
  max-width: 476px;
  ${({ theme }) => theme.mixins.flexColumnItems};

  @media screen and (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    gap: 71px;
  }
`;

export const AuthCard = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: var(--rounded);
  padding: 40px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    background-color: transparent;
    padding: 0;
  }
`;

export const AuthCardHeader = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 8px;
`;

export const AuthCardTitle = styled.h1`
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
  color: var(--grey-800);
`;

export const AuthCardText = styled.p`
  color: var(--grey);
`;

export const AuthCardFooter = styled.div`
  ${({ theme }) => theme.mixins.flexJustifyCenter};
  gap: 2px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AuthCardLink = styled(Link)`
  text-decoration: none;
  color: var(--purple);

  @media screen and (max-width: ${breakpoints.mobile}) {
    line-height: 24px;
  }
`;
