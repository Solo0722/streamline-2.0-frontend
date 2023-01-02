import { List } from "antd";
import React from "react";
import styled from "styled-components";
import { IAppThemeAndDrawerProps } from "../pages/main/routes";
import ThemeSwitcher from "./ThemeSwitcher";

const Drawerbar = ({
  isDrawerOpen,
  appTheme,
  setAppTheme,
}: IAppThemeAndDrawerProps) => {
  return (
    <DrawerWrapper isDrawerOpen={isDrawerOpen}>
      <List>
        <List.Item>
          <ThemeSwitcher appTheme={appTheme} setAppTheme={setAppTheme} />
        </List.Item>
      </List>
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div<{ isDrawerOpen: boolean | undefined }>`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  overflow-y: auto;
  position: fixed !important;
  top: 60px;
  left: 0;
  z-index: 5 !important;
  display: ${(props) => (props.isDrawerOpen ? "flex" : "none")};
  background-color: ${({ theme }) => theme.drawerBg} !important;
`;

export default Drawerbar;
