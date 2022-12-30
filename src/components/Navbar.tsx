import { EditOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import { IAppThemeProps } from "../pages/main/routes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ appTheme, setAppTheme }: IAppThemeProps) => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h3 className="logo">Streamline</h3>
      </Link>
      <ToolsWrapper>
        <ThemeSwitcher appTheme={appTheme} setAppTheme={setAppTheme} />
        <StyledWriteButton
          type="primary"
          shape="round"
          icon={<HiOutlinePencilSquare style={{ marginRight: "5px" }} />}
        >
          Write
        </StyledWriteButton>
        <Button shape="round" onClick={() => navigate("/auth")}>
          Login
        </Button>
        {/* <Avatar className="avatar">
          <UserOutlined />
        </Avatar> */}
      </ToolsWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 2px -2px ${({ theme }) => theme.navbarBoxShadow};
  transition: background 150ms linear;
  background: ${({ theme }) => theme.navbarBg};
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

  & .avatar {
    background: ${({ theme }) => theme.themeButtonBg};
  }
`;

const StyledWriteButton = styled(Button)`
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: none;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Navbar;
