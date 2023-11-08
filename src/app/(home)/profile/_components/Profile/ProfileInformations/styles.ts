import styled from "styled-components";

export const ProfileInformationsWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  border-radius: var(--rounded);
  background-color: var(--grey-300);
  padding: 20px;
  gap: 12px;
`;
