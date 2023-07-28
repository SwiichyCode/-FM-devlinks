"use client";
import CustomizeHeader from "./CustomizeHeader";
import CustomizeForm from "./CustomizeForm";
import * as S from "./styles";

export default function Customize() {
  return (
    <S.CustomizeWrapper>
      <CustomizeHeader />
      <CustomizeForm />
    </S.CustomizeWrapper>
  );
}
