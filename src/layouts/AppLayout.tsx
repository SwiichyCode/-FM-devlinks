import StyledComponentsRegistry from "@/lib/registry";
import StyledLayout from "@/layouts/StyledLayout";
import { GlobalStyle } from "@/styles/globalStyles";
import HydrationZustand from "./HydratationZustand";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <StyledLayout>
        <GlobalStyle />
        <HydrationZustand>{children}</HydrationZustand>
      </StyledLayout>
    </StyledComponentsRegistry>
  );
}
