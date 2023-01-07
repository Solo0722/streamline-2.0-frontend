import { Button, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { client, urlFor } from "../../shared/utils/sanityClient";
import { userQuery } from "../../shared/utils/sanityQueries";

const UserProfile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const q = userQuery(userId || "");
    client.fetch(q).then((data) => {
      console.log(data[0]);
      setUserData(data[0]);
    });
  }, [userId]);

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
          <small>
            {userData?.bio}
          </small>
        </div>
      </BioWrapper>

      <UserContributionsWrapper>
        <StyledButtonGroup>
          <Button shape="round" type="primary">
            Blogs
          </Button>
          <Button shape="round">Bookmarks</Button>
          <Button shape="round">Edit Profile</Button>
        </StyledButtonGroup>
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

const StyledEditProfileBtn = styled(Button)`
  position: absolute;
  bottom: -40px;
  right: 1rem;
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
  text-align: center;
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

export default UserProfile;
