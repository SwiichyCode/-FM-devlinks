import clsx from "clsx";

interface ButtonOptions {
  variant?: ButtonVariant;
}

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

export type ButtonVariant = "primary" | "secondary";

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "secondary":
      return "btn-secondary";
    default:
      return undefined;
  }
};

export default function Button(props: Props) {
  const { variant = "primary", className, children, ...rest } = props;

  const merged = clsx("btn", getVariant(variant), className);

  return (
    <button className={merged} {...rest}>
      {children}
    </button>
  );
}
