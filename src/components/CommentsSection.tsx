import React from "react";
import styled from "styled-components";

const CommentsSection = () => {
  return (
    <CommentsSectionWrapper>
      <h3>Comments Section</h3>
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
`;

export default CommentsSection;
