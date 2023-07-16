import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: var(--white);
  background-color: var(--purple);
  border-radius: var(--rounded-sm);
  border: none;
  padding: 1.1rem 2.7rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--purple-500);
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
  }
`;
