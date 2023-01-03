import { Button, Input, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../shared/utils/constants";

const SearchBanner = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search/${e.target[0].value}`);
  };

  return (
    <SearchBannerWrapper>
      <h1>Get the best and latest news in the world of tech</h1>
      <form className="space-container" onSubmit={handleSubmit}>
        <StyledSearchInput placeholder="Search blogs" />
        <StyledSearchButton htmlType="submit" type="primary">
          Search
        </StyledSearchButton>
      </form>
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
    text-align: center;
  }

  & .space-container {
    width: 70%;
  }

  ${MEDIA_QUERIES.TABLET} {
    & .space-container {
      width: 80%;
    }

    & h1 {
      font-size: 2rem;
    }
  }
`;

export const StyledSearchInput = styled(Input)`
  border-radius: 100px;
  height: 45px;
  width: 62%;
  padding: 0 2rem;
  margin: 10px;

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
    }
  }
`;
export const StyledSearchButton = styled(Button)`
  border-radius: 100px;
  height: 45px;
  width: 30%;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  margin: 10px;

  &:hover {
    background: ${({ theme }) => theme.secondaryColor};
    /* opacity: 0.7; */
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
    }
  }
`;

export default SearchBanner;
