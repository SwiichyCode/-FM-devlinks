import styled from "styled-components";

export const CustomizeHeader = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 0.8rem;
  margin-bottom: 4rem;
`;

export const CustomizeTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;
  color: var(--grey-800);
`;

export const CustomizeSubtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: var(--grey);
`;
