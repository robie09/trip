import React from "react";
// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) =>
        props.setQuery(event.target.value.toLocaleLowerCase())
      }
      placeholder="Search for a Trip name"
    />
  );
};

export default SearchBar;
