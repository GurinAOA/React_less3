import React from "react";
import s from "./item.module.scss";
import Btn from "../Btn/Btn";
import burgerFirst from "../Main/images/burgerfirst.png";

export default function Item(props) {
  console.log(props.object);
  return (
    <div className={s.container}>
      <img src={burgerFirst} alt="burger" className={s.picture} />
      {/* <image src={props.object.picture} className={`${s["picture"]} `}></image> */}
      <div className={s.wr}>
        <p className={`${s["price"]} `}>{props.object.price}</p>
        <p className={`${s["description"]} `}>{props.object.description}</p>
        <p className={`${s["weight"]} `}>{props.object.weight}</p>
        <Btn />
      </div>
    </div>
  );
}
