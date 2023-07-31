"use client";
import { ThemeProvider } from "styled-components";
import { mixins } from "@/styles/mixins";

type Props = {
  children: React.ReactNode;
};

export default function StyledLayout({ children }: Props) {
  return <ThemeProvider theme={{ mixins: mixins }}>{children}</ThemeProvider>;
}
