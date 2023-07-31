import styled from "styled-components";

export const ProfileInformationsWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  border-radius: var(--rounded);
  background-color: var(--grey-300);
  padding: 2rem;
  gap: 1.2rem;
`;
