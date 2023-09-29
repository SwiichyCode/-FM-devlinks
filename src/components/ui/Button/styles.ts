import styled from "styled-components";
import Link from "next/link";
import { breakpoints } from "@/styles/breakpoints";

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["disabled", "theme", "maxContentWidth", "withIcon"].includes(prop),
})<{
  disabled: boolean | undefined;
  theme?: "primary" | "secondary";
  maxContentWidth?: boolean;
  withIcon?: boolean;
}>`
  width: 100%;
  max-width: ${({ maxContentWidth }) => maxContentWidth && "max-content"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme === "primary" ? "var(--white)" : "var(--purple)"};
  background-color: ${({ theme }) =>
    theme === "primary" ? "var(--purple)" : "transparent"};
  border: none;
  border-radius: var(--rounded-sm);
  outline: ${({ theme }) =>
    theme === "primary" ? "none" : "1px solid var(--purple)"};
  outline-offset: -2px;
  padding: 1.1rem 2.7rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  transition-property: background-color, box-shadow;
  ${({ disabled }) => disabled && "opacity: 0.25;"}

  & a {
    text-decoration: none;
    color: ${({ theme }) =>
      theme === "primary" ? "var(--white)" : "var(--purple)"};
  }

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? null
        : theme === "primary"
        ? "var(--purple-500)"
        : "var(--purple-300)"};

    box-shadow: ${({ theme }) =>
      theme === "primary" && "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"};
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    ${({ withIcon }) => withIcon && "padding: 1.1rem 1.6rem;"}
  }
`;
