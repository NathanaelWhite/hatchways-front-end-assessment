import React from "react";
import styles from "../NameSearchBar/SearchBar.module.css";

const TagSearchBar = ({ handleTagSearch }) => {
  return (
    <div className={styles.input}>
      <input
        onChange={(e) => handleTagSearch(e.target.value)}
        type="text"
        placeholder="Search by tag"
      ></input>
    </div>
  );
};

export default TagSearchBar;
