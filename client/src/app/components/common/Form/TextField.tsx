import React, { FC } from "react";
import styles from "../../../scss/Login.module.scss";

interface TextFieldProps {
  label: string;
  icon: React.ReactNode;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({
  label,
  icon,
  name,
  type,
  value,
  onChange,
}) => {
  const isActive = value.trim().length !== 0;
  return (
    <div
      className={`${styles.LoginInputBox} ${
        isActive ? styles.ActiveInput : ""
      }`}
    >
      <span>{icon}</span>
      <input onChange={onChange} type={type} name={name} value={value} />
      <label>{label}</label>
    </div>
  );
};

export default TextField;
