import * as S from "./styles";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  labelText: string;
  labelTheme: "primary" | "secondary";
  htmlFor: string;
}

export default function Label({ labelText, labelTheme, htmlFor }: Props) {
  return (
    <S.LabelContainer htmlFor={htmlFor} labelTheme={labelTheme}>
      {labelText}
    </S.LabelContainer>
  );
}
