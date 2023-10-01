import React from "react";
import s from "./burgerItem.module.scss";
import POST from "../../../Services/POST";
import { MyContext } from "../../../Context/MyContext";
import { useContext } from "react";

export default function BurgerItem({ index, url, price, description, weight }) {

const {updateRender, setUpdateRender}=useContext(MyContext)


  function addCardToBasket() {
    POST.postBurgerFromBasket(index, url, price, description, weight );
    setUpdateRender=(!updateRender)
  }

  return (
    <div className={s.cont} key={index}>
      <img
        className={s.img}
        src={require(`../../../img/${url}.png`)}
        alt="food"
      />
      <p className={s.price}>{price}</p>
      <p className={s.description}>{description}</p>
      <p className={s.weight}>{weight}</p>
      <button onClick={addCardToBasket} className={s.btn}>
        Добавить
      </button>
      {/* <Btn updateBasket={props.updateBasket} id={element.id}/> */}
    </div>
  );
}
