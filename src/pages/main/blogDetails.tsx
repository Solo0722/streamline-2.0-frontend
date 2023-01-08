import { Avatar, Button, FloatButton, Image, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { HiPlay } from "react-icons/hi2";
import styled from "styled-components";
import BlogCard, { StyledTag } from "../../components/BlogCard";
import BlogTags from "../../components/BlogTags";
import {
  CiBookmarkPlus,
  CiCalendar,
  CiClock2,
  CiFacebook,
  CiHeart,
  CiLink,
  CiLinkedin,
  CiTwitter,
} from "react-icons/ci";
import CommentsSection from "../../components/CommentsSection";
import { MEDIA_QUERIES } from "../../shared/utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { client, urlFor } from "../../shared/utils/sanityClient";
import {
  similarBlogsQuery,
  singleBlogQuery,
} from "../../shared/utils/sanityQueries";
import Spinner from "../../components/Spinner";
import moment from "moment";
import { PortableText } from "@portabletext/react";
import { GlobalContext } from "../../context/context";

const components = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const BlogDetails = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<any>(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const { likeBlog, currentUser, bookmarkBlog } = useContext(GlobalContext);

  useEffect(() => {
    const q = singleBlogQuery(blogId || "");
    client.fetch(q).then((data) => {
      setBlog(data[0]);
    });

    if (blog) {
      const q = similarBlogsQuery(blog);
      client.fetch(q).then((data) => {
        setSimilarBlogs(data);
      });
    }
  }, [blogId]);

  const copyBlogLink = () => {
    navigator.clipboard
      .writeText(`https://streamline-one.vercel.app/blogs/${blog._id}`)
      .then(() => message.success("Link copied to clipboard successfully"));
  };

  return (
    <BlogWrapper>
      <BlogTags />
      <FloatButton.BackTop />
      {!blog || blog === null ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : (
        <>
          <BodyWrapper>
            <MainContentWrapper>
              <InfoWrapper>
                <div>
                  <StyledTag>{blog.category}</StyledTag>
                  <small>
                    <span>
                      <CiCalendar />
                    </span>
                    <span>
                      {moment(blog._createdAt).format("MMMM Do YYYY")}
                    </span>
                  </small>
                  <small>
                    <span>
                      <CiClock2 />
                    </span>
                    <span>9mins read</span>
                  </small>
                  <Button type="text" icon={<HiPlay />} />
                </div>
                <Avatar
                  src={blog.author.image}
                  onClick={() => navigate(`/user-profile/${blog.author._id}`)}
                  style={{ cursor: "pointer" }}
                />
              </InfoWrapper>
              <ContentWrapper>
                <h1>{blog.title}</h1>
                <Image
                  width="100%"
                  className="main-image"
                  src={urlFor(blog.mainImage).url()}
                  alt=""
                  loading="lazy"
                />
                <div className="blockContent">
                  <PortableText value={blog.body} components={components} />
                </div>
              </ContentWrapper>
            </MainContentWrapper>
            <SideContentWrapper>
              <StyledSideContentButton
                disabled={currentUser ? false : true}
                type="text"
                shape="round"
                icon={<CiHeart />}
                block
                onClick={() => {
                  likeBlog?.(blog._id);
                }}
              >
                <span>Like</span>
                <span>{blog.likes ? blog.likes.length : "0"}</span>
              </StyledSideContentButton>
              {currentUser ? (
                <StyledSideContentButton
                  type="text"
                  shape="round"
                  icon={<CiBookmarkPlus />}
                  block
                  onClick={() => bookmarkBlog?.(blog._id)}
                >
                  <span>Add to your list</span>
                </StyledSideContentButton>
              ) : null}
              <StyledSideContentButton
                type="text"
                shape="round"
                icon={<CiTwitter />}
                block
                href={`https://twitter.com/intent/tweet/?text=Found this blog interesting and want to share with you guys&url=https://streamline-one.vercel.app/blogs/${blog._id}`}
                target="_blank"
              >
                <span>Share to twitter</span>
              </StyledSideContentButton>
              <StyledSideContentButton
                type="text"
                shape="round"
                icon={<CiFacebook />}
                block
                href={`https://facebook.com/sharer/sharer.php?u=https://streamline-one.vercel.appp/blogs/${blog._id}`}
                target="_blank"
              >
                <span>Share to facebook</span>
              </StyledSideContentButton>
              <StyledSideContentButton
                type="text"
                shape="round"
                icon={<CiLinkedin />}
                block
                href={`https://linkedin.com/sharing/share-offsite/?url=https://streamline-one.vercel.app/blogs/${blog._id}`}
                target="_blank"
              >
                <span>Share to linkedin</span>
              </StyledSideContentButton>
              <StyledSideContentButton
                type="text"
                shape="round"
                icon={<CiLink />}
                block
                onClick={copyBlogLink}
              >
                <span>Copy link</span>
              </StyledSideContentButton>
            </SideContentWrapper>
          </BodyWrapper>
          <RelatedBlogsWrapper>
            <h3>More from Streamline</h3>
            {similarBlogs.length == 0 ? (
              "No similar blogs to show"
            ) : (
              <RelatedWrapper>
                {similarBlogs.map((bl) => (
                  <BlogCard blog={bl} />
                ))}
              </RelatedWrapper>
            )}
          </RelatedBlogsWrapper>
          <CommentsSection blog={blog} />
        </>
      )}
    </BlogWrapper>
  );
};

const BlogWrapper = styled.div`
  width: 100%;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;

  & h1 {
    margin-bottom: 1rem;
    font-weight: bolder;
    font-size: 2.5rem;
  }

  & .main-image {
    border-radius: 10px;
    width: 100%;
    height: 300px;
    object-fit: cover;
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

  & a {
    text-decoration: none;
  }

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
