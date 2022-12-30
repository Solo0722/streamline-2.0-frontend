import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import UserProfile from "./userProfile";
import BlogDetails from "./blogDetails";
import CreateBlog from "./createBlog";

export interface IAppThemeProps {
  appTheme: unknown;
  setAppTheme: (value: unknown) => void;
}

const MainRoutes = ({ appTheme, setAppTheme }: IAppThemeProps) => {
  return (
    <>
      <Navbar appTheme={appTheme} setAppTheme={setAppTheme} />
      <RoutesWrapper>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </RoutesWrapper>
    </>
  );
};

const RoutesWrapper = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 60px); */
  /* padding: 1rem; */
`;

export default MainRoutes;
