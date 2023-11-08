import { RegisterOptions, FieldValues } from "react-hook-form";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
  labelText: string;
  labelTheme?: "primary" | "secondary";
  name: string;
  errorMessage?: string;
  rules?: Pick<
    RegisterOptions<FieldValues>,
    "maxLength" | "minLength" | "validate" | "required" | "pattern"
  >;
  isInlineFlex?: boolean;
  maxWidth?: number;
}
