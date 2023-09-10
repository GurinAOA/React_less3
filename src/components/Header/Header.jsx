import React from "react";
import s from "./header.module.scss";
import logoTxt from "../Header/images/Logo (2).png";
import logoImg from "../Header/images/free-icon-kitchen-utensil-4790616 1.svg";
import headerPicture from "../Header/images/pic.png";
// import logoReg from "../Header/images/pncg-transparent-computer-icons-login-button-miscellaneous-orange-computer.jpg";
import { NavLink } from "react-router-dom";
import iconBasket from "../../img/iconbasket.png";

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.bg}>
        <div className={s.bg_wrapper}>
          <div className={s.bg_link}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/about">О нас</NavLink>
          </div>
          <div className={s.bg_form}>
            <NavLink to="/authorization">Войти</NavLink>
            <NavLink to="/register">Зарегистрироваться</NavLink>
            <NavLink to="/basketpage">
              <div className={s.wrap_icon}>
                <img
                  src={iconBasket}
                  alt="iconbasket"
                  className={s.icon_basket}
                />
              </div>
            </NavLink>
          </div>
        </div>
        <div className={s.wrap_logo}>
          <div className={s.wrap_text}>
            <img src={logoTxt} alt="logo" className={s.logo} />
          </div>
          <div className={s.wrap_picture}>
            <img src={logoImg} alt="logopicture" className={s.logoimg} />
          </div>
          {/* <div className={s.wrap_reg_logo}>
            <img src={logoReg} alt="logoreg" className={s.reg_logo} />
          </div> */}
        </div>
        <div className={s.wrapper}>
          <img src={headerPicture} alt="burger" className={s.burger} />
          <div className={s.wr_title}>
            <h1 className={s.header_title}>Только самые</h1>
            <h1 className={s.header_title_red}>сочные бургеры!</h1>
            <p className={s.header_text}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </div>
    </div>
  );
}
