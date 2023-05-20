import React, { FC } from "react";
import styles from "../../scss/App.module.scss";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container;
