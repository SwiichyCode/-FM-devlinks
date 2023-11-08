import styled from "styled-components";

export const LabelContainer = styled.label.withConfig({
  shouldForwardProp: (prop) => !["labelTheme"].includes(prop),
})<{ labelTheme: "primary" | "secondary" | undefined }>`
  ${({ labelTheme }) =>
    labelTheme === "primary"
      ? "font-size: 14px; font-weight: 400; line-height: 24px; color: var(--grey-800);"
      : "font-size: 16px; font-weight: 400; line-height: 24px; color: var(--grey);"}
`;
