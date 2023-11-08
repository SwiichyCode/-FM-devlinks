import styled from "styled-components";

export const FormWrapper = styled.form`
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 24px;
`;

export const FormSave = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: max-content;
  border-top: 1px solid var(--grey-500);
  padding: 24px 40px;
  margin: 0 0;
`;
