import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const { searchTerm } = useParams();

  return <SearchWrapper>Search: {searchTerm}</SearchWrapper>;
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
`;

export default Search;
