import { RegisterOptions, FieldValues } from "react-hook-form";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
  labelText: string;
  name: string;
  errorMessage?: string;
  rules?: Pick<
    RegisterOptions<FieldValues>,
    "maxLength" | "minLength" | "validate" | "required" | "pattern"
  >;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  useRegister?: boolean;
  isInlineFlex?: boolean;
  maxWidth?: number;
  labelTheme?: "primary" | "secondary";
}
