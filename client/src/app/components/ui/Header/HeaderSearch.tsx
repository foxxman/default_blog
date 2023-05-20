import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-outline.svg";
import styles from "../../../scss/Header.module.scss";

const HeaderSearch = () => {
  return (
    <div className={styles.HeaderSearch}>
      <input type="text" placeholder="Search..." />
      <SearchIcon />
    </div>
  );
};

export default HeaderSearch;
