import { ButtonWrapper } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

export default function Button({ type, text, disabled, ...props }: Props) {
  return (
    <ButtonWrapper disabled={disabled} {...props}>
      {text}
    </ButtonWrapper>
  );
}
