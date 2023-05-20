import React, { useState } from "react";
import styles from "../../../scss/Login.module.scss";
import LoginForm from "./LoginForm";
import { ReactComponent as CloseLogo } from "../../../assets/icons/close-outline.svg";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import {
  getIsOpenModal,
  toggleModal,
} from "../../../store/reducers/modalsReducers";
import { modalNames } from "../../../../types/modals";
import { useAppDispatch } from "../../../store";

const LoginModal = () => {
  const dispatch = useAppDispatch();

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const isOpen = useSelector(getIsOpenModal(modalNames.auth));

  const changeForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogin((p) => !p);
  };

  return (
    <div className={`${styles.LoginBackground} ${!isOpen && styles.Close}`}>
      <div className={`${styles.LoginWrapper} ${isLogin && styles.Active} `}>
        <button
          onClick={() => dispatch(toggleModal(modalNames.auth))}
          className={styles.LoginClose}
        >
          <CloseLogo />
        </button>
        <LoginForm changeForm={changeForm} />
        <RegisterForm changeForm={changeForm} />
      </div>
    </div>
  );
};

export default LoginModal;
