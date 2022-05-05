import React from "react";
import styles from "./SearchBar.module.css";

const NameSearchBar = ({ handleSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search by name"
      />
    </div>
  );
};

export default NameSearchBar;
