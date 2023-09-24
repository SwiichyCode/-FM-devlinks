import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  background-color: var(--white);
  border-radius: var(--rounded);
  padding: 1.6rem 2.4rem;
`;
