import React from "react";
import styles from "../../../scss/Header.module.scss";
import { useAppDispatch } from "../../../store";
import { toggleModal } from "../../../store/reducers/modalsReducers";
import { modalNames } from "../../../../types/modals";

const LoginBtn = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(toggleModal(modalNames.auth));
  };

  return (
    <button onClick={onClick} className={styles.HeaderLoginBtn}>
      LogIn
    </button>
  );
};

export default LoginBtn;
