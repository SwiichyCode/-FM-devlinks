import React, { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Label from "../Label";
import { Props } from "./types";
import * as S from "./styles";

export default function Select({
  labelText,
  labelTheme = "primary",
  withIcon = true,
  selectedOption,
  setSelectedOption,
  optionsList,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selectFieldRef = useRef<HTMLDivElement>(null);
  const selectOptionRef = useRef<HTMLDivElement>(null);

  const handleActiveInput = () => {
    setIsFocused(true);
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string, icon: string) => {
    setSelectedOption({
      option: option,
      icon: icon,
    });
    setIsOpen(false);
  };

  useOnClickOutside(selectFieldRef, () => {
    setIsFocused(false);
  });

  return (
    <S.SelectContainer>
      <Label
        htmlFor={labelText}
        labelText={labelText}
        labelTheme={labelTheme}
      />
      <S.SelectInput
        isFocused={isFocused}
        ref={selectFieldRef}
        onClick={handleActiveInput}
      >
        <S.SelectInputText>
          <S.SelectOptionIcon
            src={selectedOption.icon}
            width={16}
            height={16}
            alt=""
          />
          <span>{selectedOption.option}</span>
        </S.SelectInputText>
        <S.SelectChevronIcon
          isOpen={isOpen}
          src="/images/icon-chevron-down.svg"
          width={12}
          height={6}
          alt=""
        />
      </S.SelectInput>

      {isOpen && (
        <S.SelectOptions ref={selectOptionRef}>
          {optionsList.map(({ option, icon }, index) => (
            <S.SelectOption
              key={index}
              onClick={() => handleSelectOption(option, icon)}
              selectedOption={selectedOption.option}
              option={option}
            >
              {withIcon && (
                <S.SelectOptionIcon src={icon} width={16} height={16} alt="" />
              )}

              <span>{option}</span>
            </S.SelectOption>
          ))}
        </S.SelectOptions>
      )}
    </S.SelectContainer>
  );
}
