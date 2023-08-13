import React from "react";
import s from "./footer.module.scss";
import logoFooter from "../Footer/images/Logo.svg";
import logoFooterImg from "../Footer/images/free-icon-kitchen-utensil-4790616 1.svg";
import call from "../Footer/images/Call.svg";
import telegram from "../Footer/images/bi_telegram.svg";
import vk from "../Footer/images/entypo-social_vk-with-circle.svg";

export default function Footer() {
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.logo_item}>
        <div className={s.blockLogo}>
          <img src={logoFooter} alt="logo" className={s.logo} />
          <img src={logoFooterImg} alt="logo" className={s.logoImg} />
        </div>
        <div className={s.wrap_author}>
        <span className={s.author}>© YouMeal, 2022</span>
        <span className={s.author}>Design: Anastasia Ilina</span>
      </div>
      </div>
        <div className={s.blockPhone}>
          <span className={s.number}>Номер для заказа</span>
          <div className={s.call}>
            <img src={call} alt="logo" className={s.call} />
            <span className={s.phone}>+7(930)833-38-11</span>
          </div>
        </div>
        <div className={s.blockContacts}>
          <span className={s.social}>Мы в соцсетях</span>
          <div className={s.signs}>
            <img src={telegram} alt="logo" className={s.telegram} />
            <img src={vk} alt="logo" className={s.vk} />
          </div>
        </div>
      </div>
     
    </div>
  );
}
