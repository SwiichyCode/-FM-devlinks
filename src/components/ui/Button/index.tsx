import Image from "next/image";
import { LinkWrapper, ButtonWrapper } from "./styles";

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

type RenderButtonProps = {
  withLink?: boolean;
  href?: string;
  children: React.ReactNode;
};

export function RenderButton({ withLink, href, children }: RenderButtonProps) {
  return withLink ? (
    <LinkWrapper href={href || ""}>{children}</LinkWrapper>
  ) : (
    children
  );
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
    <RenderButton withLink={withLink} href={href}>
      <ButtonWrapper
        type={type}
        disabled={disabled}
        theme={theme}
        maxContentWidth={maxContentWidth}
        {...props}
      >
        {withIcon && iconSrc && (
          <Image src={iconSrc} alt={text || ""} width={16} height={16} />
        )}
        {text}
      </ButtonWrapper>
    </RenderButton>
  );
}
