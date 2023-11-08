import Link from "next/link";
import ButtonTailwind from "./Button";
import type { ButtonVariant } from "./Button";

type Props = {
  variant?: ButtonVariant;
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink(props: Props) {
  const { variant = "secondary", href, children, ...rest } = props;

  return (
    <Link href={href}>
      <ButtonTailwind variant={variant} {...rest}>
        {children}
      </ButtonTailwind>
    </Link>
  );
}
