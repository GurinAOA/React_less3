import React from "react";
import s from "../Basket/basket.module.scss";
import basketJson from "../data/basket.json";
import delivery from "../Main/images/free-icon-delivery-2362252.svg";
import ItemBasket from "../ItemBasket/ItemBasket";

import { useState } from "react";

export default function Basket() {
  const [basket, setBasket] = useState(basketJson);

  function delBasket(id) {
    const copyDelBasket = [...basket];
    const newCopyDelBasket = copyDelBasket.filter((item) => item.id !== id);
    setBasket(newCopyDelBasket);
    
  }
  function addToBasket(id) {
    const copyAddBasket = [...basket];
    const newCopyAddBasket = copyAddBasket.push(obj => obj.id === id);
    setBasket(newCopyAddBasket);
    
  }

  function addTitle(){
    setBasket([]);
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
      <div className={s.wr_bag}>
        {addTitle && 
          <p Корзина пуста></p>

        }
        <div className={s.wr_bags_cards}>
          {basket.map((element, index) => (
            <ItemBasket
              basket={basket}
              addToBasket={addToBasket}
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
