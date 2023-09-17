import React from "react";
import s from "../Basket/basket.module.scss";
// import basketJson from "../data/basket.json";
import delivery from "../Main/images/free-icon-delivery-2362252.svg";
import ItemBasket from "../ItemBasket/ItemBasket";
import data from "../data/all.json";

import { useState } from "react";
import { useEffect } from "react";

export default function Basket({ id }) {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    if (!id) return;
    addToBasket(id);
  }, [id]);

  function delBasket(id) {
    const copyDelBasket = [...basket];
    const newCopyDelBasket = copyDelBasket.filter((item) => item.id !== id);
    setBasket(newCopyDelBasket);
  }
  function addToBasket(id) {
    let obj = false;
    data.forEach((element) => {
      if (element.id == id) {
        obj = element;
      }
    });
    if (!obj) return;
    const newBasket = [...basket];
    newBasket.push(obj);
    setBasket(newBasket);
  }

  function getTotalSum() {
    let count = 0;
    basket.forEach((item) => {
      count += item.number * item.sum;
    });
    return count;
  }
  function getTotalQuantity() {
    let count = 0;
    basket.forEach((item) => {
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
      <div className={s.wr_bag}>
        <p className={s.wr_bag_empty}>Корзина пуста</p>
        <div className={s.wr_bags_cards}>
          {basket.map((element, index) => (
            <ItemBasket
              basket={basket}
              delBasket={delBasket}
              setBasket={setBasket}
              object={element}
              key={index}
            />
          ))}
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
      </div>
    </div>
  );
}
