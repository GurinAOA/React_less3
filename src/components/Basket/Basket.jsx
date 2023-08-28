import React from "react";
import s from "../Basket/basket.module.scss";
import basketJson from "../data/basket.json";
import delivery from "../Main/images/free-icon-delivery-2362252.svg";
// import ItemBasket from "../ItemBasket/ItemBasket";

import { useState } from "react";

export default function Basket() {
  const [cardsBasket, setCardsBasket] = useState(basketJson);

  function minus(id) {
    const arr = cardsBasket.map((item) => {
      if (item.id === id) {
        item.number -= 1;
        return item;
      }
      return item;
    });
    setCardsBasket(arr);
  }
  function plus(id) {
    const arr = cardsBasket.map((item) => {
      if (item.id === id) {
        item.number += 1;
        return item;
      }
      return item;
    });
    setCardsBasket(arr);
  }

  function getTotalSum() {
    let count = 0;
    basketJson.forEach((item) => {
      count += item.number * item.sum;
    });

    return count;
  }
  function getTotalQuantity() {
    let count = 0;
    basketJson.forEach((item) => {
      count += item.number;
    });
    return count;
  }

  return (
    <div className={s.wr_sum}>
      <div className={s.common}>
        <h2 className={s.title}>Корзина</h2>
        <div className={s.quantity}>{getTotalQuantity()}</div>
      </div>
      <div className={s.basket_wrap}>
        <div className={s.wr_bag}>
          {basketJson.map((element, id) => (
            <div className={s.bags_cards} key={id}>
              <div className={s.cont_img}>
                {" "}
                <img
                  className={s.img}
                  src={require(`../Main/images/${element.url}.png`)}
                  alt="food"
                ></img>
              </div>

              <div className={s.wr_bags_text}>
                <p className={s.description}>{element.description}</p>
                <p className={s.weight}>{element.weight}</p>
                <p className={s.price}>{element.price}</p>
              </div>
              <div className={s.wr_bags_btn_container}>
                <button
                  onClick={() => {
                    if (element.number > 0) minus(element.id);
                  }}
                  className={s.bags_btn}
                >
                  -
                </button>
                <span className={s.number}>{element.number}</span>
                <button
                  onClick={() => {
                    plus(element.id);
                  }}
                  className={s.bags_btn}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.wr_sum}>
        <div className={s.wr_sum_common}>
          <span className={s.wr_sum_total}>
            Итого
            <span className={s.wr_sum_number}>{getTotalSum()}₽</span>
          </span>
        </div>
      </div>
      <button className={s.wr_sum_btn}>Оформить</button>
      <div className={s.wr_delivery}>
        <img src={delivery} alt="" className={s.delivery} />
        <span className={s.wr_free}>Бесплатная доставка</span>
      </div>
    </div>
  );
}
