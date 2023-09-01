import React from "react";
import s from "./item.module.scss";
import Btn from "../Btn/Btn";

export default function Item(props) {
  return (
    <div className={s.container}>
      <span className={s.wr_title}>{props.arrData[0].title}</span>
      <div className={s.wr}>
        {props.arrData.map((element, index) => (
          <div className={s.cont} key={index}>
            <img
              className={s.img}
              src={require(`../../img/${element.url}.png`)}
              alt="food"
            />
            <p className={s.price}>{element.price}</p>
            <p className={s.description}>{element.description}</p>
            <p className={s.weight}>{element.weight}</p>
            <Btn />
          </div>
        ))}
      </div>
    </div>
  );
}
