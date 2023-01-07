import { Button, List, Tag } from "antd";
import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import {
  HiOutlinePencilSquare,
  HiOutlineMagnifyingGlass,
  HiOutlineUserCircle,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import styled from "styled-components";
import { IAppThemeAndDrawerProps } from "../pages/main/routes";
import ThemeSwitcher, { StyleThemeButton } from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import { blogTags } from "../shared/utils/data";
import { GlobalContext } from "../context/context";

const Drawerbar = ({
  isDrawerOpen,
  setIsDrawerOpen,
  appTheme,
  setAppTheme,
}: IAppThemeAndDrawerProps) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(GlobalContext);

  const themeToggler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (appTheme === "light") {
      setAppTheme !== undefined && setAppTheme("dark");
    } else {
      setAppTheme !== undefined && setAppTheme("light");
    }
  };

  const navigateTo = (url: string) => {
    navigate(url);
    setIsDrawerOpen && setIsDrawerOpen(false);
  };

  return (
    <DrawerWrapper isDrawerOpen={isDrawerOpen}>
      <List className="list">
        <ListItem onClick={themeToggler}>
          <span>Change Theme</span>
          <StyleThemeButton
            type="text"
            shape="circle"
            onClick={themeToggler}
            icon={appTheme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
          />
        </ListItem>
        <ListItem onClick={() => navigateTo("/create-blog")}>
          <span> Write blog</span>
          <StyleThemeButton
            type="text"
            shape="circle"
            icon={<HiOutlinePencilSquare />}
          />
        </ListItem>
        <ListItem onClick={() => navigateTo(`/search`)}>
          <span> Search blogs</span>
          <StyleThemeButton
            type="text"
            shape="circle"
            icon={<HiOutlineMagnifyingGlass />}
          />
        </ListItem>
        <ListItem
          onClick={() => {
            currentUser
              ? navigate(`/user-profile/${currentUser.uid}`)
              : navigate("/auth");
          }}
        >
          <span>{currentUser ? "Profile" : "Login"}</span>
          <StyleThemeButton
            type="text"
            shape="circle"
            icon={<HiOutlineUserCircle />}
          />
        </ListItem>
        <ListItem style={{ borderBottom: "none" }}>
          <span>Trending</span>
          <StyleThemeButton
            type="text"
            shape="circle"
            icon={<HiOutlinePresentationChartLine />}
          />
        </ListItem>
        <div className="tags">
          {blogTags.map((tag) => (
            <span className="blog-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
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

  & .list {
    width: 100%;
  }

  & .tags {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  & .blog-tag {
    margin: 5px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.4rem;
    border-radius: 7px;
    font-size: 0.8rem;
  }
`;

const ListItem = styled(List.Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export default Drawerbar;
