import { AppRoutes } from "./routes"
import { AppThemeProvider, DrawerProvider } from "./core/contexts";
import { MenuLateral } from "./core/components";
import { BrowserRouter } from "react-router-dom";


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}
