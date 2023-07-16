import styled from "styled-components";
import Link from "next/link";

export const AuthFormWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumnItems};
  gap: 5.1rem;
`;

export const AuthCard = styled.div`
  width: 476px;
  height: 482px;
  background-color: var(--white);
  border-radius: var(--rounded);
  padding: 4rem;
`;

export const AuthCardHeader = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 0.8rem;
`;

export const AuthCardTitle = styled.h1`
  font-size: 3.2rem;
  line-height: 4.8rem;
  font-weight: 700;
  color: var(--grey-800);
`;

export const AuthCardText = styled.p`
  color: var(--grey);
`;

export const AuthCardForm = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 2.4rem;
  margin: 4rem 0 2.4rem 0;
`;

export const AuthCardFooter = styled.div`
  text-align: center;
`;

export const AuthCardLink = styled(Link)`
  text-decoration: none;
  color: var(--purple);
`;

export const PasswordInformations = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: var(--grey);
`;
