import React from "react";
import styles from "../../../scss/Header.module.scss";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";
import LoginBtn from "./LoginBtn";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.HeaderTitle}>
        Default
        <span>Blog</span>
      </h1>

      <nav className={styles.HeaderNav}>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/"}>Groups</Link>
        <Link to={"/"}>Messanger</Link>
        <Link to={"/"}>Settings</Link>
      </nav>

      <HeaderSearch />

      <LoginBtn />
    </header>
  );
};

export default Header;
