import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BlogTags from "../../components/BlogTags";
import {
  StyledSearchButton,
  StyledSearchInput,
} from "../../components/SearchBanner";
import { client } from "../../shared/utils/sanityClient";
import { searchQuery } from "../../shared/utils/sanityQueries";
import { useState, useEffect } from "react";
import { SpinnerWrapper } from "./home";
import Spinner from "../../components/Spinner";
import BlogCard from "../../components/BlogCard";

const Search = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  const navigate = useNavigate();

  const [searchTermBlogs, setSearchTermBlogs] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/search/${e.target[0].value}`);
  };

  const searchBlog = () => {
    if (searchTerm !== undefined) {
      const q = searchQuery(searchTerm.toLowerCase());
      client.fetch(q).then((data) => {
        setSearchTermBlogs(data);
        console.log(data);
      });
    }
  };

  useEffect(() => {
    if (searchTerm !== undefined) {
      const q = searchQuery(searchTerm.toLowerCase());
      client.fetch(q).then((data) => {
        setSearchTermBlogs(data);
        console.log(data);
      });
    }
  }, [searchTerm, navigate]);

  return (
    <SearchWrapper>
      <BlogTags />
      <BodyWrapper>
        <form onSubmit={handleSubmit}>
          <StyledSearchInput placeholder="Search blogs" />
          <StyledSearchButton htmlType="submit" type="primary">
            Search
          </StyledSearchButton>
        </form>

        {searchTerm && (
          <p style={{ textAlign: "center" }}>
            Search results for {searchTerm}
          </p>
        )}

        {searchTermBlogs &&
          (searchTermBlogs.length === 0 ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            <BlogsWrapper>
              {searchTermBlogs.map((blog) => (
                <BlogCard blog={blog} />
              ))}
            </BlogsWrapper>
          ))}
      </BodyWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BodyWrapper = styled.div`
  padding: 2rem 5rem;
`;

const BlogsWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default Search;
