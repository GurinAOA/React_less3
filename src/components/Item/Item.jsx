import React from "react";
import s from "./item.module.scss";
import Btn from "../Btn/Btn";

export default function Item(props) {
  return (
    <div className={s.container}>
      <div className={s.wr}>
        <img
          src={require(`../Main/images/${props.object.url}.png`)}
          alt="food"
        /> 
        <p className={s.price}>{props.object.price}</p>
        <p className={s.description}>{props.object.description}</p>
        <p className={s.weight}>{props.object.weight}</p>
        <Btn />
      </div>
    </div>
  );
}
