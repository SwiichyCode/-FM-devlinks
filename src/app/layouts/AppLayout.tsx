import StyledComponentsRegistry from "@/app/lib/registry";
import StyledLayout from "@/app/layouts/StyledLayout";
import { GlobalStyle } from "@/app/styles/globalStyles";

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
