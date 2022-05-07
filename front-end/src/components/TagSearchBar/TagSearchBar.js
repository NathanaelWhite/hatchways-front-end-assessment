import React from "react";
import styles from "../NameSearchBar/SearchBar.module.css";

const TagSearchBar = () => {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Search by tag"></input>
    </div>
  );
};

export default TagSearchBar;
