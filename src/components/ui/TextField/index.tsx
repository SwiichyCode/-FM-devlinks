import { useState, useRef } from "react";
import { useFormContext, FieldErrors } from "react-hook-form";
import { useOnClickOutside } from "usehooks-ts";
import Label from "../Label";
import { Props } from "./types";
import * as S from "./styles";

export default function TextField({
  iconSrc,
  labelText,
  labelTheme = "primary",
  name,
  errorMessage,
  rules,
  onChange,
  useRegister = true,
  isInlineFlex,
  maxWidth,
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
    <S.TextFieldContainer isInlineFlex={isInlineFlex}>
      <Label htmlFor={name} labelText={labelText} labelTheme={labelTheme} />
      <S.TextFieldWrapper
        ref={textFieldRef}
        onClick={handleActiveInput}
        isFocused={isFocused}
        error={formState.errors[name || ""] as FieldErrors}
        maxWidth={maxWidth}
      >
        {iconSrc && (
          <S.TextFieldIcon src={iconSrc} width={16} height={16} alt="" />
        )}
        {useRegister ? (
          <S.TextFieldInput {...register?.(name || "", rules)} {...props} />
        ) : (
          <S.TextFieldInput onChange={onChange} {...props} />
        )}

        {formState.errors[name] && (
          <S.TextFieldError>
            {(formState.errors[name]?.message as string) || errorMessage}
          </S.TextFieldError>
        )}
      </S.TextFieldWrapper>
    </S.TextFieldContainer>
  );
}
