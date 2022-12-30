import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { IAppThemeProps } from "../pages/main/routes";

const ThemeSwitcher = ({ appTheme, setAppTheme }: IAppThemeProps) => {
  const themeToggler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    appTheme === "light" ? setAppTheme("dark") : setAppTheme("light");
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

const StyleThemeButton = styled(Button)`
  background: ${({ theme }) => theme.themeButtonBg};
`;

export default ThemeSwitcher;
