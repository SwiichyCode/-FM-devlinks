import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@/app/styles/breakpoints";

export const NavigationWrapper = styled.nav`
  ${({ theme }) => theme.mixins.flexAlignCenter};
`;

export const NavigationLink = styled(Link)`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: var(--grey);
  border-radius: var(--rounded);
  text-decoration: none;
  padding: 1.1rem 2.7rem;
  gap: 0.8rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--purple);
  }

  &.active {
    color: var(--purple);
    background-color: var(--purple-300);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;
