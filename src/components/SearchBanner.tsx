import { Button, Input, Space } from "antd";
import React from "react";
import styled from "styled-components";

const SearchBanner = () => {
  return (
    <SearchBannerWrapper>
      <h1>Get the best and latest news in the world of tech</h1>
      <div className="space-container">
        <StyledSearchInput placeholder="Search blogs" />
        <StyledSearchButton type="primary">Search</StyledSearchButton>
      </div>
    </SearchBannerWrapper>
  );
};

const SearchBannerWrapper = styled.div`
  width: 100%;
  height: 455px;
  padding: 1rem;
  background-image: url("/home-page-bg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  & h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  & .space-container {
    width: 70%;
  }
`;

const StyledSearchInput = styled(Input)`
  border-radius: 100px;
  height: 45px;
  width: 60%;
  padding: 0 2rem;
  margin: 0 10px;
`;
const StyledSearchButton = styled(Button)`
  border-radius: 100px;
  height: 45px;
  width: 30%;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  margin: 0 10px;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    opacity: 0.7;
  }
`;

export default SearchBanner;
