import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  border-radius: var(--rounded);
  background: var(--white);
  padding: 4rem;
`;

export const FormHeader = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 0.8rem;
  margin-bottom: 4rem;
`;

export const FormTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4.8rem;
  color: var(--grey-800);
`;

export const FormSubtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: var(--grey);
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: max-content;
  border-top: 0.1rem solid var(--grey-500);
  padding: 2.4rem 4rem;
  margin: 0 0;
`;
