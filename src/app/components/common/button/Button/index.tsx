import Image from "next/image";
import { ButtonWrapper } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | null;
  iconSrc?: string | null;
  disabled?: boolean;
  theme?: "primary" | "secondary";
  minContentWidth?: boolean;
}

export default function Button({
  type,
  text,
  iconSrc,
  disabled,
  theme = "primary",
  minContentWidth,
  ...props
}: Props) {
  return (
    <ButtonWrapper
      disabled={disabled}
      theme={theme}
      minContentWidth={minContentWidth}
      {...props}
    >
      {iconSrc && <Image src={iconSrc} width={20} height={20} alt="" />}
      {text}
    </ButtonWrapper>
  );
}
