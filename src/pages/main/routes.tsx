import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <RoutesWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
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
