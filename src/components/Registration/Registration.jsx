import React from "react";
import s from "./registration.module.scss";
import { useState } from "react";


export default function Registration() {

  const [formReg, setFormReg] = useState (true)

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [copypassword, setCopypassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");

  function getDataUser() {
    const obj = {
      log: login,
      pas: password,
      copypas: copypassword,
      email: email,
      name: name,
      surname: surname,
      city: city,
    };
    setLogin("");
    setPassword("");
    setCopypassword("");
    setEmail("");
    setName("");
    setSurname("");
    setCity("");
    localStorage.setItem("user", JSON.stringify(obj));
  }

  function closeRegForm(){
    setFormReg (false)
  }

  return (
    <div className={s.wrapper}>
      <form className={s.registrationform}>
        <div className={s.wr_close}>
        <h2 className={s.registrationformtitle}>Регистрация</h2>
        <button    onClick={() => {
         closeRegForm();
        }}
         className={s.window_close} type="button">X</button>
        </div>
        <div>
          <input
            className={s.registr_form_login}
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className={s.registr_form_login}
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <input
            className={s.registr_form_login}
            type="text"
            placeholder="Город"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <input
            className={s.registr_form_login}
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <div>
            <input
              className={s.registr_form_pass}
              type="password"
              placeholder="Повторите пароль"
              value={copypassword}
              onChange={(e) => setCopypassword(e.target.value)}
            />
          </div>
        </div>
        <div className={s.container}>
          <button type="button" className={s.reg_btn} onClick={getDataUser}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
