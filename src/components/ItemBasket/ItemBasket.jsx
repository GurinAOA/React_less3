import React from "react";
import s from "./ItemBasket.module.scss";
import { useState } from "react";
import basket from "../data/basket.json";

export default function ItemBasket(props) {
  const [cardsBasket, setCardsBasket] = useState(basket);
  function minus(id) {
    const arr = cardsBasket.map((item) => {

      if (item.id === id ) {
        item.number -= 1;
        return item;
      }
      return item;
    });
    setCardsBasket(arr);
  }
  function plus(id) {
    const arr = cardsBasket.map((item) => {
      if (item.id === id ) {
        item.number += 1;
        return item;
      }
      return item;
    });
    setCardsBasket(arr);
   
  }
  return (
    <div className={s.basket_wrap}>
      <img
        className={s.img}
        src={require(`../Main/images/${props.object.url}.png`)}
        alt="food"
      />
      <div className={s.wr_bags_text}>
        <p className={s.description}>{props.object.description}</p>
        <p className={s.weight}>{props.object.weight}</p>
        <p className={s.price}>{props.object.price}</p>
      </div>
      <div className={s.wr_bags_btn_container}>
        <button
          onClick={() => {
            if(props.object.number>0)
            minus(props.object.id);
          }}
          className={s.bags_btn}
        >
          -
        </button>
        <span className={s.number}>{props.object.number}</span>
        <button
          onClick={() => {
            plus(props.object.id);
          }}
          className={s.bags_btn}
        >
          +
        </button>
      </div>
    </div>
  );
}
