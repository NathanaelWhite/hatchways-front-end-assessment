import React from "react";
import styles from "./SearchBar.module.css";

const NameSearchBar = ({ handleNameSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        onChange={(e) => handleNameSearch(e.target.value)}
        type="text"
        placeholder="Search by name"
      />
    </div>
  );
};

export default NameSearchBar;
