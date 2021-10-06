import React from "react";
import SearchBar from "./SearchBar.jsx";
import style from "./Nav.module.css";


function Nav({ onSearch }) {
  return (
    <div className={style.navbar}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
