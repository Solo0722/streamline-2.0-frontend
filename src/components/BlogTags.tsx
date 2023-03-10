import { Button, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { blogTags } from "../shared/utils/data";
import { CiSearch } from "react-icons/ci";
import { MEDIA_QUERIES } from "../shared/utils/constants";
import { useNavigate } from "react-router-dom";

const BlogTags = () => {
  const navigate = useNavigate();

  return (
    <BlogTagsWrapper>
      <div>
        {blogTags.map((tag) => (
          <span
            className="blog-tag"
            key={tag}
            onClick={() => navigate(`/search/${tag}`)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        <Button
          shape="circle"
          type="text"
          icon={<CiSearch />}
          onClick={() => navigate("/search")}
        />
      </div>
    </BlogTagsWrapper>
  );
};

const BlogTagsWrapper = styled.div`
  background: ${({ theme }) => theme.blogTagsBg};
  min-height: 40px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .blog-tag {
    margin-right: 1rem;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.4rem;
    border-radius: 7px;
    font-size: 0.8rem;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      display: none;
    }
  }
`;

export default BlogTags;
