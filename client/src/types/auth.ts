export enum FORM_FIELDS {
  EMAIL = "email",
  PASSWORD = "password",
  PASSWORD_REPEAT = "password_repeat",
  NAME = "name",
  LOGIN = "login",
}

export interface ILoginForm {
  [FORM_FIELDS.EMAIL]: string;
  [FORM_FIELDS.PASSWORD]: string;
}

export interface IRegisterForm {
  [FORM_FIELDS.EMAIL]: string;
  [FORM_FIELDS.LOGIN]: string;
  [FORM_FIELDS.PASSWORD]: string;
  [FORM_FIELDS.PASSWORD_REPEAT]: string;
}
