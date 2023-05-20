import React from "react";
import "./App.css";
import styles from "./app/scss/App.module.scss";
import Container from "./app/components/common/Container";
import Header from "./app/components/ui/Header/Header";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./app/pages/BlogPage";
import LoginModal from "./app/components/ui/Login/LoginModal";

function App() {
  return (
    <div className={styles.App}>
      <Container>
        <Header />

        <LoginModal />

        <Routes>
          <Route path="/" Component={BlogPage} />
          {/* <Route path="/login" Component={LoginPage} /> */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
