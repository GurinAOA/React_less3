import React from "react";
import s from "./btn.module.scss";
export default function Btn(props) {
  return (
    <div className={s.container}>
      <button
        onClick={() => {
          props.addToBasket(props.object.id);
        }}
        className={s.btn}
      >
        Добавить
      </button>
    </div>
  );
}
