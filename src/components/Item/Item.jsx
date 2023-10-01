import React from "react";
import s from "./item.module.scss";
// import Btn from "../Btn/Btn";
import BurgerItem from './BurgerItem/BurgerItem'
import { MyContext } from "../../Context/MyContext";
import { useContext } from "react";


export default function Item(productTab,count) {


  const { arrProduct, setArrProduct } = useContext(MyContext);

  // function updateBasket(id) {
  //   setId(id);
  // }

  return (
    <div className={s.container}>
      <span className={s.wr_title}>{arrProduct[productTab][0].title}</span>
      <div className={s.wr}>
        {arrProduct[productTab].map((element, index) => (
          <BurgerItem {...element} index={index}/>
        ))}
      </div>
    </div>
  );
}
