import styled from "styled-components";

export const LinkGeneratorWrapper = styled.li`
  ${({ theme }) => theme.mixins.flexColumn};
  background-color: var(--grey-300);
  border-radius: var(--rounded);
  padding: 20px;
  gap: 12px;
`;

export const LinkGeneratorHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
`;
export const LinkGeneratorIndex = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--grey);
`;

export const LinkGeneratorRemove = styled.button`
  ${({ theme }) => theme.mixins.buttonReset};
  font-size: 16px;
  line-height: 24px;
  color: var(--grey);
`;

export const LinkGeneratorInputWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 12px;
`;
