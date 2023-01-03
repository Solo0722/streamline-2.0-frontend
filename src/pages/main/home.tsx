import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";
import BlogTags from "../../components/BlogTags";
import SearchBanner from "../../components/SearchBanner";
import Spinner from "../../components/Spinner";
import { GlobalContext } from "../../context/context";

const Home = () => {
  const { blogs } = useContext(GlobalContext);

  return (
    <HomeWrapper>
      <BlogTags />
      <SearchBanner />
      {blogs &&
        (blogs.length === 0 ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <BodyWrapper>
            {blogs.map((blog) => (
              <BlogCard blog={blog} />
            ))}
          </BodyWrapper>
        ))}
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyWrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const SpinnerWrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
