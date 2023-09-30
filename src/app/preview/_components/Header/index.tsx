"use client";
import Navigation from "../Navigation";
import * as S from "./styles";

type Props = {
  isView: boolean;
};

export default function Header({ isView }: Props) {
  return <S.HeaderWrapper>{!isView && <Navigation />}</S.HeaderWrapper>;
}
