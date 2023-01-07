import { EditOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import { IAppThemeAndDrawerProps } from "../pages/main/routes";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { MEDIA_QUERIES } from "../shared/utils/constants";
import { Fade as Hamburger } from "hamburger-react";
import { GlobalContext } from "../context/context";

const Navbar = ({
  appTheme,
  setAppTheme,
  isDrawerOpen,
  setIsDrawerOpen,
}: IAppThemeAndDrawerProps) => {
  const navigate = useNavigate();
  const { currentUser, signUserOut } = useContext(GlobalContext);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Profile",
      onClick: () =>
        navigate(`/user-profile/${currentUser && currentUser.uid}`),
    },
    {
      key: "2",
      label: "Sign out",
      onClick: signUserOut,
    },
  ];

  return (
    <NavWrapper>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h3 className="logo">Streamline</h3>
      </Link>
      <ToolsWrapper>
        <ThemeSwitcher appTheme={appTheme} setAppTheme={setAppTheme} />

        {currentUser !== null && (
          <StyledWriteButton
            type="primary"
            shape="round"
            icon={<HiOutlinePencilSquare style={{ marginRight: "5px" }} />}
            onClick={() => navigate("/create-blog")}
          >
            Write
          </StyledWriteButton>
        )}

        {currentUser || currentUser !== null ? (
          <Dropdown
            menu={{
              items,
            }}
          >
            <Avatar
              className="avatar"
              src={currentUser && currentUser?.photoURL}
            >
              <UserOutlined />
            </Avatar>
          </Dropdown>
        ) : (
          <Button shape="round" onClick={() => navigate("/auth")}>
            Login
          </Button>
        )}
      </ToolsWrapper>
      <div className="hamburger">
        <Hamburger size={18} toggled={isDrawerOpen} toggle={setIsDrawerOpen} />
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.navbarBoxShadow};
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

  & .hamburger {
    display: none;
  }

  ${MEDIA_QUERIES.TABLET} {
    & .hamburger {
      display: inline-block;
    }
  }
`;

const ToolsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .avatar {
    background: ${({ theme }) => theme.themeButtonBg};
    cursor: pointer;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      display: none;
    }
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
