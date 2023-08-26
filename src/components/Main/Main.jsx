import React from "react";
import Item from "../Item/Item";
import s from "./main.module.scss";
import mainSignFirst from "../Main/images/free-icon-cheeseburger-2362255.svg";
import mainSignSecond from "../Main/images/Закуски.svg";
import mainSignThird from "../Main/images/Хотдоги.svg";
import mainSignFourth from "../Main/images/Комбо.svg";
import mainSignFifth from "../Main/images/free-icon-burrito-2362225.svg";
import mainSignSix from "../Main/images/Пицца.svg";
import mainSignSeven from "../Main/images/Вок.svg";
import mainSignEight from "../Main/images/Десерты.svg";
import mainSignNine from "../Main/images/Соусы.svg";
// import delivery from "../Main/images/free-icon-delivery-2362252.svg";
import card from "../data/data.json";
import basket from "../data/basket.json";
import Basket from "../Basket/Basket";
import ItemBasket from "../ItemBasket/ItemBasket";

export default function Main() {
  return (
    <div className={s.container}>
      <div className={s.icons}>
        <button className={s.btn_sign}>
          <img src={mainSignFirst} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Бургеры</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignSecond} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Закуски</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignThird} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Хот-доги</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignFourth} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Комбо</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignFifth} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Шаурма</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignSix} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Пицца</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignSeven} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Вок</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignEight} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Десерты</span>
        </button>
        <button className={s.btn_sign}>
          <img src={mainSignNine} alt="logo" className={s.mainSignFirst} />
          <span className={s.icons_sign}>Соусы</span>
        </button>
      </div>
      <h1 className={s.headling}>Бургеры</h1>
      <div className={s.mainwrap}>
        <div className={s.wrapper_bag}>
            <Basket/>
        </div>
      
        <div className={s.container_common}>
          {card.map((element, index) => (
            <Item object={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
