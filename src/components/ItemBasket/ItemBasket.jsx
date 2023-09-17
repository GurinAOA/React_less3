import React from "react";
import s from "./ItemBasket.module.scss";
import delBasket from "../../img/delbasketpng.png";

export default function ItemBasket(props) {


  function minus(id) {
    const arr = props.basket.map((item) => {
      if (item.id === id) {
        item.number -= 1;
        return item;
      }
      return item;
    });
    props.setBasket(arr);
  }
  function plus(id) {
    const arr = props.basket.map((item) => {
      if (item.id === id) {
        item.number += 1;
        return item;
      }
      return item;
    });
    props.setBasket(arr);
  }

  return (
    <div className={s.basket_wrap}>
      <img
        className={s.img}
        src={require(`../../img/${props.object.url}.png`)}
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
            if (props.object.number > 0) minus(props.object.id);
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
      <div className={s.wr_del_btn}>
        <button
          onClick={() => {
            props.setBasket([]);
            props.delBasket(props.object.id);
          }}
          className={s.del_btn}
          type="button"
        >
          <img src={delBasket} alt="delBasket" className={s.delBasket} />
        </button>
      </div>
    </div>
  );
}
