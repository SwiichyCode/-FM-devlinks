import styled from "styled-components";

export const LabelContainer = styled.label.withConfig({
  shouldForwardProp: (prop) => !["labelTheme"].includes(prop),
})<{ labelTheme: "primary" | "secondary" | undefined }>`
  ${({ labelTheme }) =>
    labelTheme === "primary"
      ? "font-size: 1.4rem; font-weight: 400; line-height: 2.4rem; color: var(--grey-800);"
      : "font-size: 1.6rem; font-weight: 400; line-height: 2.4rem; color: var(--grey);"}
`;
