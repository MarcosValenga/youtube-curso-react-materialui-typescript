import { AppRoutes } from "./routes"
import { AppThemeProvider } from "./core/contexts";
import { MenuLateral } from "./core/components";


export const App = () => {
  return (
    <AppThemeProvider>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
    </AppThemeProvider>
  );
}
