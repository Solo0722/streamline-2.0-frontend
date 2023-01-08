import { Button, Input, List } from "antd";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { client } from "../shared/utils/sanityClient";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/context";
import { MEDIA_QUERIES } from "../shared/utils/constants";

const CommentsSection = ({ blog }: any) => {
  const { currentUser } = useContext(GlobalContext);

  const [comm, setComm] = useState<string>("");
  const [commenting, setCommenting] = useState<boolean>(false);

  const commentOnBlog = (blogId: string, comment: string) => {
    if (comment !== "") {
      setCommenting(true);
      client
        .patch(blogId)
        .setIfMissing({ comments: [] })
        .insert("after", "comments[-1]", [
          {
            _key: uuidv4(),
            user: {
              _type: "user",
              _ref: currentUser.uid,
            },
            comment: comment,
          },
        ])
        .commit()
        .then(() => setCommenting(false));
    }
  };

  return (
    <CommentsSectionWrapper>
      <h3>Comments Section</h3>
      <List>
        {blog.comments &&
          blog.comments.map((comment: any) => (
            <ListItem>
              <div className="list-item">
                <img src={comment.user.image} alt="" />
                <div className="comment">
                  <h4>{comment.user.userName}</h4>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </ListItem>
          ))}
      </List>
      <CommentBox
        id="commentbox"
        style={{ display: `${currentUser ? "block" : "none"}` }}
      >
        <Input.TextArea
          placeholder="Add comment..."
          rows={3}
          value={comm}
          onChange={(e) => setComm(e.currentTarget.value)}
        />
        <Button
          type="primary"
          disabled={commenting}
          onClick={() => commentOnBlog(blog._id, comm)}
        >
          {commenting ? "Adding comment" : "Comment"}
        </Button>
      </CommentBox>
    </CommentsSectionWrapper>
  );
};

const CommentsSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;

  & h3 {
    margin-bottom: 1rem;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 1rem;
    }
  }
`;

const ListItem = styled(List.Item)`
  & .list-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  & .comment {
    margin-left: 1rem;
  }
`;

const CommentBox = styled.div`
  margin-top: 1rem;

  & button {
    margin-top: 1rem;
  }
`;

export default CommentsSection;
