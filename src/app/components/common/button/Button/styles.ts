import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["disabled", "theme", "minContentWidth"].includes(prop),
})<{
  disabled: boolean | undefined;
  theme?: "primary" | "secondary";
  minContentWidth?: boolean;
}>`
  width: 100%;
  max-width: ${({ minContentWidth }) => minContentWidth && "min-content"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: var(--white);
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

  &:hover {
    background-color: ${({ theme }) =>
      theme === "primary" ? "var(--purple-500)" : "var(--purple-300)"};
    box-shadow: ${({ theme }) =>
      theme === "primary" && "0px 0px 32px 0px rgba(99, 60, 255, 0.25)"};
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    padding: 1.1rem 1.6rem;
  }
`;
