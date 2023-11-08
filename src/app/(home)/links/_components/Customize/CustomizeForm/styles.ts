import styled from "styled-components";

export const FormWrapper = styled.form``;

export const LinksWrapper = styled.ul`
  ${({ theme }) => theme.mixins.flexColumn};
  height: 100%;
  gap: 24px;
  margin-top: 24px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--grey-500);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 8px;
  }
`;

export const FormSave = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: max-content;
  border-top: 1px solid var(--grey-500);
  padding: 24px 40px;
  margin-top: 24px;
`;
