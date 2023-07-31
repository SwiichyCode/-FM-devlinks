import StyledComponentsRegistry from "@/lib/registry";
import StyledLayout from "@/layouts/StyledLayout";
import { GlobalStyle } from "@/styles/globalStyles";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <StyledLayout>
        <GlobalStyle />
        {children}
      </StyledLayout>
    </StyledComponentsRegistry>
  );
}
