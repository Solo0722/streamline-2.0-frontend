import React from "react";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";
import BlogTags from "../../components/BlogTags";
import SearchBanner from "../../components/SearchBanner";

const Home = () => {
  return (
    <HomeWrapper>
      <BlogTags />
      <SearchBanner />
      <BodyWrapper>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </BodyWrapper>
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

export default Home;
