import React from "react";
import { useLocation } from "react-router";
const Search = () => {
  const location = useLocation();
  alert(location.pathname);
  return <></>;
};

export default Search;
