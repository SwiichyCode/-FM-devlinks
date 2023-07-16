import { ButtonWrapper } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

export default function Button({ type, text, ...props }: Props) {
  return (
    <ButtonWrapper type={type} {...props}>
      {text}
    </ButtonWrapper>
  );
}
