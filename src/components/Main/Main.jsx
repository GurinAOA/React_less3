import React from "react";
import Item from "../Item/Item";
import Tabs from "../Tabs/Tabs";
import s from "./main.module.scss";
import card from "../data/data.json";
import Basket from "../Basket/Basket";
// import tabs from "../data/tabs.json"
import snacks from "../data/snacks.json";
import hotdog from "../data/hotdog.json";
import combo from "../data/combo.json";
import shaurma from "../data/shaurma.json";
import pizza from "../data/pizza.json";
import vok from "../data/vog.json";
import desserts from "../data/desserts.json";
import sauce from "../data/sauce.json";
import { useState } from "react";
import GET from "../../Services/GET";

// async function getBurger() {
//   const arrBurger = await GET.getBurger();
//   console.log(arrBurger);
// return arrBurger
// }
// getBurger();
const arrData = [
  card,
  snacks,
  hotdog,
  combo,
  shaurma,
  pizza,
  vok,
  desserts,
  sauce,
];

export default function Main(props) {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(false);
  console.log(arrData);

  function editCount(numbers) {
    setCount(numbers);
  }
  function updateBasket(id) {
    setId(id);
  }

  return (
    <div className={s.container}>
      <div className={s.icons}>
        <Tabs editCount={editCount} />
      </div>
      <div className={s.mainwrap}>
        <div className={s.wrapper_bag}>
          <Basket id={id} />
        </div>
        <div className={s.container_common}>
          <Item arrData={arrData[count]} updateBasket={updateBasket} />
        </div>
      </div>
    </div>
  );
}
