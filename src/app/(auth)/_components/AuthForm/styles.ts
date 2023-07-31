import styled from "styled-components";

export const AuthCardForm = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 2.4rem;
  margin: 4rem 0 2.4rem 0;
`;

export const AuthCardError = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--red);
`;

export const PasswordInformations = styled.p.withConfig({
  shouldForwardProp: (prop) => !["isError"].includes(prop),
})<{ isError?: string }>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({ isError }) =>
    isError === "minLength" ? "var(--red)" : "var(--grey)"};
`;
