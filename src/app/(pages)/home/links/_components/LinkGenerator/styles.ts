import styled from "styled-components";

export const LinkGeneratorWrapper = styled.li`
  ${({ theme }) => theme.mixins.flexColumn};
  background-color: var(--grey-300);
  border-radius: var(--rounded);
  padding: 2rem;
  gap: 1.2rem;
`;

export const LinkGeneratorHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
`;
export const LinkGeneratorIndex = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: var(--grey);
`;

export const LinkGeneratorRemove = styled.button`
  ${({ theme }) => theme.mixins.buttonReset};
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: var(--grey);
`;

export const LinkGeneratorInputWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 1.2rem;
`;
