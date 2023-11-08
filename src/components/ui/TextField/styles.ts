import { FieldErrors } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";

export const TextFieldContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isInlineFlex"].includes(prop),
})<{ isInlineFlex: boolean | undefined }>`
  ${({ isInlineFlex, theme }) =>
    isInlineFlex
      ? "display: flex; align-items: center; justify-content: space-between;"
      : theme.mixins.flexColumn};

  gap: 4px;
`;

export const TextFieldWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isFocused", "maxWidth", "error"].includes(prop),
})<{ isFocused: boolean; maxWidth?: number | undefined; error?: FieldErrors }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}%;
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: var(--rounded-sm);
  ${({ error, isFocused }) =>
    error
      ? null
      : isFocused && "box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);"};
  background-color: var(--white);
  padding: 12px 16px;
  gap: 12px;
  transition: all 0.2s ease-in-out;
  cursor: text;

  border: ${({ error, isFocused }) =>
    error
      ? "1px solid var(--red)"
      : isFocused
      ? "1px solid var(--purple)"
      : "1px solid var(--grey-500)"};
`;

export const TextFieldIcon = styled(Image)``;

export const TextFieldInput = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey-800);
  border: none;

  &:focus {
    outline: none;
  }
`;

export const TextFieldError = styled.p`
  width: 100%;
  text-align: right;
  font-size: 12px;
  line-height: 18px;
  color: var(--red);
`;
