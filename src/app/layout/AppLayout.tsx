import StyledComponentsRegistry from "@/app/lib/registry";
import ProtectedRouteLayout from "@/app/layout/ProtectedRouteLayout";
import { GlobalStyle } from "@/app/styles/globalStyles";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ProtectedRouteLayout>
        <GlobalStyle />
        {children}
      </ProtectedRouteLayout>
    </StyledComponentsRegistry>
  );
}
