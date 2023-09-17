import React from "react";
import s from "./form.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function getDataUser() {
    const obj = {
      log: login,
      pas: password,
    };
    setLogin("");
    setPassword("");
    localStorage.setItem("user", JSON.stringify(obj));
  }
  function returnToRegForm() {
    navigate("/Register");
  }
  function closeAuthForm() {
    navigate("/");
  }

  return (
    <div className={s.wrapper}>
      <form className={s.registrationform}>
        <div className={s.wr_close}>
          <h2 className={s.registrationformtitle}>Авторизоваться</h2>
          <button
            onClick={() => {
              closeAuthForm();
            }}
            className={s.window_close}
            type="button"
          >
            X
          </button>
        </div>
        <div>
          <input
            className={s.registr_form_login}
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <input
            className={s.registr_form_pass}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={s.container}>
          <button type="button" className={s.reg_btn} onClick={getDataUser}>
            Войти
          </button>
          <button
            type="button"
            onClick={() => {
              returnToRegForm();
            }}
            className={s.reg_btn}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
