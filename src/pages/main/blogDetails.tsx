import { Avatar, Button, FloatButton, Image } from "antd";
import React, { useEffect } from "react";
import { HiOutlineHeart, HiPlay } from "react-icons/hi2";
import styled from "styled-components";
import BlogCard, { StyledTag } from "../../components/BlogCard";
import BlogTags from "../../components/BlogTags";
import {
  CiBookmarkPlus,
  CiCalendar,
  CiCalendarDate,
  CiChat1,
  CiClock1,
  CiClock2,
  CiFacebook,
  CiHeart,
  CiLink,
  CiLinkedin,
  CiShare1,
  CiShare2,
  CiTwitter,
} from "react-icons/ci";
import CommentsSection from "../../components/CommentsSection";
import { MEDIA_QUERIES } from "../../shared/utils/constants";

const BlogDetails = () => {
  // useEffect(() => {
  //   scrollTo(0, 0);
  // }, []);

  return (
    <BlogWrapper>
      <BlogTags />
      <FloatButton.BackTop />
      <BodyWrapper>
        <MainContentWrapper>
          <InfoWrapper>
            <div>
              <StyledTag>Web dev</StyledTag>
              <small>
                <span>
                  <CiCalendar />
                </span>
                <span>Dec 30, 2022</span>
              </small>
              <small>
                <span>
                  <CiClock2 />
                </span>
                <span>9mins read</span>
              </small>
              <Button type="text" icon={<HiPlay />} />
            </div>
            <Avatar src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTdGOzztryRA56uiLUTqfEcKRXcHbe-9mNSiUeAZzFzinX3MG3yIn_Ub8f_8L98BgOpZG53IZ0aigknl00" />
          </InfoWrapper>
          <ContentWrapper>
            <h1>The best fonts of 2023</h1>
            <Image className="main-image" src="/home-page-bg.png" alt="" />
            <div className="blockContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt quo ut tempore est, culpa optio eius tenetur blanditiis
                enim hic laudantium rem repudiandae, quis consequuntur!
                Explicabo delectus ex autem pariatur?
              </p>
            </div>
          </ContentWrapper>
        </MainContentWrapper>
        <SideContentWrapper>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiHeart />}
            block
          >
            <span>Like</span>
            <span>58</span>
          </StyledSideContentButton>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiBookmarkPlus />}
            block
          >
            <span>Add to your list</span>
          </StyledSideContentButton>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiChat1 />}
            block
          >
            <span>Leave a comment</span>
          </StyledSideContentButton>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiTwitter />}
            block
          >
            <span>Share to twitter</span>
          </StyledSideContentButton>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiFacebook />}
            block
          >
            <span>Share to facebook</span>
          </StyledSideContentButton>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiLinkedin />}
            block
          >
            <span>Share to linkedin</span>
          </StyledSideContentButton>
          <StyledSideContentButton
            type="text"
            shape="round"
            icon={<CiLink />}
            block
          >
            <span>Copy link</span>
          </StyledSideContentButton>
        </SideContentWrapper>
      </BodyWrapper>
      <RelatedBlogsWrapper>
        <h3>More from Streamline</h3>
        <RelatedWrapper>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </RelatedWrapper>
      </RelatedBlogsWrapper>
      <CommentsSection />
    </BlogWrapper>
  );
};

const BlogWrapper = styled.div`
  width: 100%;
`;

const BodyWrapper = styled.div`
  color: ${({ theme }) => theme.blogCardText};
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 1rem;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const MainContentWrapper = styled.div`
  width: 60%;
  height: 100%;

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
    }
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & small,
  & button {
    margin: 0 1rem;
  }

  & small span {
    margin: 0 0.2rem;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      flex-direction: column;
      align-items: flex-start;
    }

    & div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & small,
    & button {
      margin: 5px 0;
    }
  }
`;
const ContentWrapper = styled.div`
  margin: 1rem 0;

  & h1 {
    margin-bottom: 1rem;
    font-weight: bolder;
    font-size: 3rem;
  }

  & .main-image {
    border-radius: 10px;
    width: 100%;
    height: 300px;
  }

  & .blockContent {
    margin: 2rem 0;
  }

  & .blockContent p {
    line-height: 2.7rem;
  }

  ${MEDIA_QUERIES.TABLET} {
    & h1 {
      font-size: 2rem;
    }
  }
`;

const SideContentWrapper = styled.div`
  width: 30%;
  height: 100%;
  position: sticky;
  top: 70px;
  border-radius: 10px;
  background: ${({ theme }) => theme.blogTagsBg};
  padding: 1rem;

  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 100%;
      margin-bottom: 2rem;
      position: relative;
    }
  }
`;

const StyledSideContentButton = styled(Button)`
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & span {
    margin-left: 1rem;
  }
`;

const RelatedBlogsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;

  & h3 {
    margin-bottom: 1rem;
    font-weight: bolder;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 1rem;
      margin: 5rem 0;
    }
  }
`;

const RelatedWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default BlogDetails;
