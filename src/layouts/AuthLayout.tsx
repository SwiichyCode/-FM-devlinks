import styled from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

type Props = {
  children: React.ReactNode;
};

const AuthLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  gap: 5.1rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3.2rem;
  }
`;

export default function AuthLayout({ children }: Props) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
