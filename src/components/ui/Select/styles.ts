import styled from "styled-components";
import Image from "next/image";
import { TextFieldWrapper } from "../TextField/styles";

export const SelectContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.mixins.flexColumn};
  gap: 4px;
`;

export const SelectLabel = styled.label`
  font-size: 14px;
  line-height: 24px;
  color: var(--grey-800);
`;

export const SelectInput = styled(TextFieldWrapper)`
  justify-content: space-between;
  cursor: pointer;
`;

export const SelectInputText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey-800);
  gap: 14px;
`;

export const SelectChevronIcon = styled(Image).withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.2s ease-in-out;
`;

export const SelectOptions = styled.div`
  width: 100%;
  max-height: 245px;
  overflow-y: auto;
  position: absolute;
  top: calc(100% + 8px);
  background-color: var(--white);
  border: 1px solid var(--grey-500);
  border-radius: var(--rounded-sm);
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  z-index: 10;

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

export const SelectOption = styled.div.withConfig({
  shouldForwardProp: (prop) => !["selectedOption", "option"].includes(prop),
})<{ selectedOption: string; option: string }>`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: var(--grey-800);
  color: ${({ selectedOption, option }) =>
    selectedOption === option ? "var(--purple)" : "var(--grey-800)"};
  padding: 12px 0;
  gap: 14px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--grey-500);
  }
`;

export const SelectOptionIcon = styled(Image)``;
