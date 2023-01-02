import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import UserProfile from "./userProfile";
import BlogDetails from "./blogDetails";
import CreateBlog from "./createBlog";
import Search from "./search";
import Drawerbar from "../../components/Drawerbar";

export interface IAppThemeAndDrawerProps {
  appTheme?: unknown;
  setAppTheme?: (value: unknown) => void;
  isDrawerOpen?: boolean;
  setIsDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainRoutes = ({ appTheme, setAppTheme }: IAppThemeAndDrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar
        appTheme={appTheme}
        setAppTheme={setAppTheme}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <RoutesWrapper>
        <Drawerbar
          isDrawerOpen={isDrawerOpen}
          appTheme={appTheme}
          setAppTheme={setAppTheme}
        />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </RoutesWrapper>
    </>
  );
};

const RoutesWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default MainRoutes;
