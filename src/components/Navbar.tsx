import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <NavWrapper>
      <h3 className="logo">Streamline</h3>
      <ToolsWrapper>
        <ThemeSwitcher />
        <StyledWriteButton
          type="primary"
          icon={<PlusOutlined />}
          style={{ margin: "0 1rem" }}
        >
          Write
        </StyledWriteButton>
        {/* <Button>Login</Button> */}
        <Avatar>
          <UserOutlined />
        </Avatar>
      </ToolsWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 8%);
  transition: background 150ms linear;
  background: rgba(255, 255, 255, 0.98);
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .logo {
    font-family: "Lobster Two", "Manrope", sans-serif;
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledWriteButton = styled(Button)`
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: none;
`;

export default Navbar;
