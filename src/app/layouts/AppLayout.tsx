import StyledComponentsRegistry from "@/app/lib/registry";
import StyledLayout from "@/app/layouts/StyledLayout";
import ProtectedRouteLayout from "@/app/layouts/ProtectedRouteLayout";
import { GlobalStyle } from "@/app/styles/globalStyles";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <StyledLayout>
        <ProtectedRouteLayout>
          <GlobalStyle />
          {children}
        </ProtectedRouteLayout>
      </StyledLayout>
    </StyledComponentsRegistry>
  );
}
