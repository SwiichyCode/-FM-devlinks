import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  border-radius: var(--rounded);
  background: var(--white);
  padding: 40px 40px 0 40px;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 8px;
  margin-bottom: 40px;
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: max-content;
  border-top: 1px solid var(--grey-500);
  padding: 24px 40px;
  margin: 0 0;
`;
