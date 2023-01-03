import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainRoutes from "./pages/main/routes";
import Auth from "./pages/auth/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/themes/globalStyles";
import { ConfigProvider, theme } from "antd";
import { darkTheme, defaultTheme, lightTheme } from "./shared/themes/theme";
import useLocalStorage from "beautiful-react-hooks/useLocalStorage";
import GlobalProvider from "./context/context";

function App() {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [appTheme, setAppTheme] = useLocalStorage(
    "appTheme",
    isDarkTheme ? "dark" : "light"
  );
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${defaultTheme.primaryColor}`,
            borderRadius: 3,
            fontFamily: "Manrope,sans-serif",
          },
          algorithm:
            appTheme === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <GlobalProvider>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <MainRoutes appTheme={appTheme} setAppTheme={setAppTheme} />
                  }
                />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </GlobalProvider>
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
