import React, { FC, useState } from "react";
import styles from "../../../scss/Login.module.scss";
import { ReactComponent as MailLogo } from "../../../assets/icons/mail.svg";
import { ReactComponent as LockLogo } from "../../../assets/icons/lock-closed.svg";
import { ReactComponent as UserLogo } from "../../../assets/icons/person.svg";
import { FORM_FIELDS, IRegisterForm } from "../../../../types/auth";
import TextField from "../../common/Form/TextField";

interface IRegister {
  changeForm: (e: React.FormEvent) => void;
}

const RegisterForm: FC<IRegister> = ({ changeForm }) => {
  const [data, setData] = useState<IRegisterForm>({
    [FORM_FIELDS.EMAIL]: "",
    [FORM_FIELDS.LOGIN]: "",
    [FORM_FIELDS.PASSWORD]: "",
    [FORM_FIELDS.PASSWORD_REPEAT]: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={`${styles.LoginFormBox} ${styles.Register}`}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <TextField
          label="Login"
          icon={<UserLogo />}
          name={FORM_FIELDS.LOGIN}
          type="text"
          onChange={handleChange}
          value={data[FORM_FIELDS.LOGIN]}
        />
        {/* MAIL */}
        <TextField
          label="Email"
          icon={<MailLogo />}
          name={FORM_FIELDS.EMAIL}
          type="email"
          onChange={handleChange}
          value={data[FORM_FIELDS.EMAIL]}
        />
        {/* PASSWORD */}
        <TextField
          label="Password"
          icon={<LockLogo />}
          name={FORM_FIELDS.PASSWORD}
          type="password"
          onChange={handleChange}
          value={data[FORM_FIELDS.PASSWORD]}
        />
        {/* PASSWORD */}
        <TextField
          label="Repeat your password"
          icon={<LockLogo />}
          name={FORM_FIELDS.PASSWORD_REPEAT}
          type="password"
          onChange={handleChange}
          value={data[FORM_FIELDS.PASSWORD_REPEAT]}
        />
        {/* SUBMIT */}
        <button type="submit" className={styles.LoginSubmit}>
          Sign Up
        </button>

        <button onClick={changeForm} className={styles.LoginChangeForm}>
          Already have an account?
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
