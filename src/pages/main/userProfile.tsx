import { Button, Image } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BlogCard from "../../components/BlogCard";
import { client, urlFor } from "../../shared/utils/sanityClient";
import { userBlogsQuery, userQuery } from "../../shared/utils/sanityQueries";
import { GlobalContext } from '../../context/context';

const UserProfile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<any>(null);
  const [choice, setChoice] = useState<any>("blogs");
  const [userBlogs, setUserBlogs] = useState<any>(null);
  const {currentUser} = useContext(GlobalContext);

  useEffect(() => {
    const q = userQuery(userId || "");
    client.fetch(q).then((data) => {
      setUserData(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    const q = userBlogsQuery(userId || "");
    client.fetch(q).then((data) => {
      console.log(data);
      setUserBlogs(data);
    });
  }, [userId]);

  const UserBookmarks = () => {
    return (
      <>
        {userData &&
          (userData.bookmarks.length === 0 ? (
            <p>No blogs bookmarked</p>
          ) : (
            <BodyWrapper>
              {userData.bookmarks.map((blog: any) => (
                <BlogCard blog={blog.post} />
              ))}
            </BodyWrapper>
          ))}
      </>
    );
  };
  const UserBlogs = () => {
    return (
      <>
        {userBlogs &&
          (userBlogs.length === 0 ? (
            <p>No blogs created</p>
          ) : (
            <BodyWrapper>
              {userBlogs.map((blog: any) => (
                <BlogCard blog={blog} />
              ))}
            </BodyWrapper>
          ))}
      </>
    );
  };
  const EditProfile = () => <div>Edit Profile</div>;

  return (
    <UserProfileWrapper>
      <CoverImageWrapper>
        <Image
          style={{ objectFit: "cover" }}
          width={"100%"}
          height={"100%"}
          src="https://picsum.photos/500"
        />
        <ProfileImage>
          <Image
            width={"100px"}
            height={"100px"}
            src={userData ? userData?.image : ""}
          />
        </ProfileImage>
        {/* <StyledEditProfileBtn shape="round" type="default">
          Edit Profile
        </StyledEditProfileBtn> */}
      </CoverImageWrapper>
      <BioWrapper>
        <div>
          <h3>{userData?.userName}</h3>
        </div>
        <div>
          <small>{userData?.bio}</small>
        </div>
      </BioWrapper>

      <UserContributionsWrapper>
        <StyledButtonGroup>
          <Button
            shape="round"
            type={`${choice === "blogs" ? "primary" : "default"}`}
            onClick={() => setChoice("blogs")}
          >
            Blogs
          </Button>
          {currentUser.uid === userId && (
            <>
              <Button
                shape="round"
                type={`${choice === "bookmarks" ? "primary" : "default"}`}
                onClick={() => setChoice("bookmarks")}
              >
                Bookmarks
              </Button>
              <Button
                shape="round"
                type={`${choice === "edit-profile" ? "primary" : "default"}`}
                onClick={() => setChoice("edit-profile")}
              >
                Edit Profile
              </Button>
            </>
          )}
        </StyledButtonGroup>
        <BodyContent>
          {choice === "blogs" ? (
            <UserBlogs />
          ) : choice === "bookmarks" ? (
            <UserBookmarks />
          ) : (
            <EditProfile />
          )}
        </BodyContent>
      </UserContributionsWrapper>
    </UserProfileWrapper>
  );
};

const UserProfileWrapper = styled.div`
  width: 100%;
`;

const CoverImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

const ProfileImage = styled.div`
  position: absolute;
  left: calc(50% - 50px);
  bottom: -40px;

  & img {
    border: 3px solid #fff;
    border-radius: 50%;
  }
`;

const BioWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserContributionsWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`;

const StyledButtonGroup = styled(Button.Group)`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & button {
    box-shadow: none;
  }
`;

const BodyContent = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const BodyWrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default UserProfile;
