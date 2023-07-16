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
  rules?: Pick<
    RegisterOptions<FieldValues>,
    "maxLength" | "minLength" | "validate" | "required"
  >;
}

export default function TextField({
  iconSrc,
  labelText,
  name,
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

  const handleErrorsMessages = () => {
    switch (formState.errors[name]?.type) {
      case "required":
        return "Can’t be empty";
      case "minLength":
        return "Please check again";
      case "validate":
        return "Password does not match";
      default:
        return "";
    }
  };

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
          <S.TextFieldError>
            {handleErrorsMessages() as string}
          </S.TextFieldError>
        )}
      </S.TextFieldWrapper>
    </S.TextFieldContainer>
  );
}
