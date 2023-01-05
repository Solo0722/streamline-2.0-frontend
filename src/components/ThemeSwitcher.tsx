import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { IAppThemeAndDrawerProps } from "../pages/main/routes";

const ThemeSwitcher = ({ appTheme, setAppTheme }: IAppThemeAndDrawerProps) => {
  const themeToggler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (appTheme === "light") {
      setAppTheme !== undefined && setAppTheme("dark");
    } else {
      setAppTheme !== undefined && setAppTheme("light");
    }
  };

  return (
    <StyleThemeButton
      type="text"
      shape="circle"
      onClick={themeToggler}
      icon={appTheme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
    />
  );
};

export const StyleThemeButton = styled(Button)`
  background: ${({ theme }) => theme.themeButtonBg};
  margin: 0 0.5rem;
`;

export default ThemeSwitcher;
