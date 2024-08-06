import { AppRoutes } from "./routes"
import { AppThemeProvider } from "./core/contexts";


export const App = () => {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}
