import Image from "next/image";
import Link from "next/link";
import { ButtonWrapper } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | null;
  iconSrc?: string | null;
  disabled?: boolean;
  theme?: "primary" | "secondary";
  maxContentWidth?: boolean;
  withLink?: boolean;
  withIcon?: boolean;
  href?: string;
}

export default function Button({
  type = "button",
  text,
  iconSrc,
  disabled,
  theme = "primary",
  maxContentWidth,
  withLink,
  withIcon,
  href,
  ...props
}: Props) {
  return (
    <ButtonWrapper
      disabled={disabled}
      theme={theme}
      maxContentWidth={maxContentWidth}
      withIcon={withIcon}
      type={type}
      {...props}
    >
      {iconSrc && <Image src={iconSrc} width={20} height={20} alt="" />}

      {withLink ? <Link href={href || ""}>{text}</Link> : <span>{text}</span>}
    </ButtonWrapper>
  );
}
