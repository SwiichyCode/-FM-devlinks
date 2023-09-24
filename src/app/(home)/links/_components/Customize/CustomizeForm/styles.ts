import styled from "styled-components";

export const FormWrapper = styled.form``;

export const LinksWrapper = styled.ul`
  ${({ theme }) => theme.mixins.flexColumn};
  height: 100%;
  gap: 2.4rem;
  margin-top: 2.4rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--grey-500);
    border-radius: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 0.8rem;
  }
`;

export const FormSave = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: max-content;
  border-top: 0.1rem solid var(--grey-500);
  padding: 2.4rem 4rem;
  margin-top: 2.4rem;
`;
