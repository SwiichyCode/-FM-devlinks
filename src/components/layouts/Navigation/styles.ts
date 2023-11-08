import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@/styles/breakpoints";

export const NavigationWrapper = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ theme }) => theme.mixins.flexAlignCenter};
`;

export const NavigationLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ active: boolean }>`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ active }) => (active ? "var(--purple)" : "var(--grey)")};
  background-color: ${({ active }) => (active ? "var(--purple-300)" : "none")};
  border-radius: var(--rounded);
  text-decoration: none;
  padding: 11px 27px;
  gap: 8px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--purple);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;
