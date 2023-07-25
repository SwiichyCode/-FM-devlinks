import styled from "styled-components";

export const FormWrapper = styled.form`
  ${({ theme }) => theme.mixins.flexColumnBetween};
  height: calc(100% - 4rem - 7.9rem);
  gap: 2.4rem;
`;

export const LinksWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};
  height: 100%;
  gap: 2.4rem;
`;

export const CustomizeSave = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: max-content;
  border-top: 0.1rem solid var(--grey-500);
  padding: 2.4rem 4rem;
  margin: 0 -4rem;
`;
