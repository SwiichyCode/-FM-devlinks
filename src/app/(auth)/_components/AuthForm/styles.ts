import styled from "styled-components";

export const AuthCardForm = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 24px;
  margin: 40px 0 24px 0;
`;

export const AuthCardError = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--red);
`;

export const PasswordInformations = styled.p.withConfig({
  shouldForwardProp: (prop) => !["isError"].includes(prop),
})<{ isError?: string }>`
  font-size: 12px;
  line-height: 18px;
  color: ${({ isError }) =>
    isError === "minLength" ? "var(--red)" : "var(--grey)"};
`;
