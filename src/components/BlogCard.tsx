import { Button, Tag } from "antd";
import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogCard = () => {
  const navigate = useNavigate();

  return (
    <CardWrapper onClick={() => navigate("/blogs/1")}>
      <ImageWrapper>
        <img src="/home-page-bg.png" alt="" />
        <StyledBookmarkButton
          shape="circle"
          type="text"
          icon={<CiBookmarkPlus size={20} />}
        />
      </ImageWrapper>
      <ContentWrapper>
        <div className="info-bar">
          <small className="date">Dec 30</small>
          <StyledTag>Web dev</StyledTag>
        </div>
        <div className="title">
          <h3>The best fonts in 2023</h3>
          <small className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit
            quibusdam ducimus possimus distinctio expedita natus, suscipit
            ullam! Atque fugit expedita labore
          </small>
        </div>
      </ContentWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  min-height: 300px;
  margin: 2rem 0 !important;
  -webkit-box-flex: 0;
  flex: 0 0 30%;
  max-width: 30%;
  color: ${({ theme }) => theme.blogCardText};
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const StyledBookmarkButton = styled(Button)`
  position: absolute;
  top: 5px;
  left: 5px;
  color: #ffff;
  background: rgba(255, 255, 255, 0.24);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const ContentWrapper = styled.div`
  width: 100%;

  & .date {
    color: ${({ theme }) => theme.secondaryColor};
  }

  & .info-bar {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & .title h3 {
    margin-bottom: 0.5rem;
    font-weight: bolder;
  }

  & .desc {
    opacity: 0.6;
  }
`;

export const StyledTag = styled(Tag)`
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.tertiaryColor};
  color: #222;
`;

export default BlogCard;
