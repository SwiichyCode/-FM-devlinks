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
  gap: 51px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 32px;
  }
`;

export default function AuthLayout({ children }: Props) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
