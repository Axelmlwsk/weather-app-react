import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input className={style.input} onChange={onChange} type="text" placeholder="Search City..." />
      <button className={style.button} type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
}
