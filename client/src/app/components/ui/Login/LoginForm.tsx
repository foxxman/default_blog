import React, { FC, useState } from "react";
import styles from "../../../scss/Login.module.scss";
import { ReactComponent as MailLogo } from "../../../assets/icons/mail.svg";
import { ReactComponent as LockLogo } from "../../../assets/icons/lock-closed.svg";
import TextField from "../../common/Form/TextField";
import { FORM_FIELDS, ILoginForm } from "../../../../types/auth";

interface ILogin {
  changeForm: (e: React.FormEvent) => void;
}

const LoginForm: FC<ILogin> = ({ changeForm }) => {
  const [data, setData] = useState<ILoginForm>({
    [FORM_FIELDS.EMAIL]: "",
    [FORM_FIELDS.PASSWORD]: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={`${styles.LoginFormBox} ${styles.Login}`}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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

        {/* SUBMIT */}
        <button type="submit" className={styles.LoginSubmit}>
          Sign In
        </button>

        <button onClick={changeForm} className={styles.LoginChangeForm}>
          Don't have an account?
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
