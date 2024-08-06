import { ThemeProvider } from "@emotion/react";
import { AppRoutes } from "./routes"
import { LightTheme } from "./core/themes";


export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
