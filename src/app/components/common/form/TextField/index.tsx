import { useState, useRef } from "react";
import {
  useFormContext,
  RegisterOptions,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { useOnClickOutside } from "usehooks-ts";
import * as S from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
  labelText: string;
  name: string;
  errorMessage: string;
  rules?: Pick<
    RegisterOptions<FieldValues>,
    "maxLength" | "minLength" | "validate" | "required"
  >;
}

export default function TextField({
  iconSrc,
  labelText,
  name,
  errorMessage,
  rules,
  ...props
}: Props) {
  const { register, setFocus, formState } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  const textFieldRef = useRef<HTMLDivElement>(null);

  const handleActiveInput = () => {
    setFocus(name);
    setIsFocused(true);
  };

  useOnClickOutside(textFieldRef, () => {
    setIsFocused(false);
  });

  return (
    <S.TextFieldContainer>
      <S.TextFieldLabel>{labelText}</S.TextFieldLabel>
      <S.TextFieldWrapper
        ref={textFieldRef}
        onClick={handleActiveInput}
        isFocused={isFocused}
        error={formState.errors[name] as FieldErrors}
      >
        {iconSrc && (
          <S.TextFieldIcon src={iconSrc} width={16} height={16} alt="" />
        )}
        <S.TextFieldInput {...register?.(name, rules)} {...props} />

        {formState.errors[name] && (
          <S.TextFieldError>{errorMessage}</S.TextFieldError>
        )}
      </S.TextFieldWrapper>
    </S.TextFieldContainer>
  );
}
