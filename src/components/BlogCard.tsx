import { Button, Image, Tag } from "antd";
import moment from "moment";
import React, { useContext } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../shared/utils/constants";
import { urlFor } from "../shared/utils/sanityClient";
import { GlobalContext } from '../context/context';

const BlogCard = ({ blog }: any) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(GlobalContext);

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          width={"100%"}
          src={urlFor(blog.mainImage).url()}
          alt="blog-img"
          className="blog-img"
          loading="lazy"
        />
        {currentUser && (
          <StyledBookmarkButton
            shape="circle"
            type="text"
            icon={<CiBookmarkPlus size={20} />}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <div className="info-bar">
          <small className="date">
            {moment(blog._updatedAt).format("MMMM Do")}
          </small>
          <StyledTag>{blog.category}</StyledTag>
        </div>
        <div className="title" onClick={() => navigate(`/blogs/${blog._id}`)}>
          <h3>{blog.title}</h3>
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

  ${MEDIA_QUERIES.TABLET} {
    & {
      max-width: 45%;
      flex: 0 0 45%;
    }
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;

  & .blog-img {
    width: 100%;
    height: 200px;
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
