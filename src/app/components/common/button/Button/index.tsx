import { ButtonWrapper } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  disabled?: boolean;
}

export default function Button({ type, text, disabled, ...props }: Props) {
  return (
    <ButtonWrapper type={type} disabled={disabled} {...props}>
      {text}
    </ButtonWrapper>
  );
}
