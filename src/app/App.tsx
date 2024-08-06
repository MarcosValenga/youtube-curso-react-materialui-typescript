import { AppRoutes } from "./routes"
import { AppThemeProvider, DrawerProvider } from "./core/contexts";
import { MenuLateral } from "./core/components";


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </DrawerProvider>
    </AppThemeProvider>
  );
}
