import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoutes from "./pages/main/routes";
import Auth from "./pages/auth/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/themes/globalStyles";
import { ConfigProvider, theme } from "antd";
import { darkTheme, defaultTheme, lightTheme } from "./shared/themes/theme";
import useDarkMode from "beautiful-react-hooks/useDarkMode";
import "./App.css";

function App() {
  const { toggle, enable, disable, isDarkMode } = useDarkMode();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${defaultTheme.primaryColor}`,
            borderRadius: 3,
            fontFamily: "Manrope,sans-serif",
          },
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<MainRoutes />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
