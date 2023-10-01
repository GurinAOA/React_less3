import React, { useEffect } from "react";
import Item from "../Item/Item";
import Tabs from "../Tabs/Tabs";
import s from "./main.module.scss";
import Basket from "../Basket/Basket";
import tabsJson from "../data/tabs.json";
import { useState } from "react";
import GET from "../../Services/GET";

export default function Main(props) {
  const [count, setCount] = useState(0);
  // const [arrProduct, setArrProduct] = useState(false);
  // const [basketCards, setBasketCards] = useState(false);
  // const [flag, setFlag] = useState(false);
  const [id, setId] = useState(false);
  // const productTab = tabsJson[count].title;

  // useEffect(() => {
  //   getAllProducts();

  // }, []);

  // async function getProduct() {
  //   const allproduct = await GET.getProduct();
  //   setArrProduct(allproduct);
  // }
  // async function getBasket() {
  //   const allbasket = await GET.getBasket();
  //   setBasketCards(allbasket);
  // }

  // async function getAllProducts() {
  //   await getProduct();
  //   await getBasket();
  //   setFlag(true);
  // }

  function editCount(numbers) {
    setCount(numbers);
  }
  // function updateBasket(id) {
  //   setId(id);
  // }

  // if (!flag) return <h1>Loading...</h1>;

  return (
    <div className={s.container}>
      <div className={s.icons}>
        <Tabs editCount={editCount} />
      </div>
      <div className={s.mainwrap}>
        <div className={s.wrapper_bag}>
          <Basket />
        </div>
        <div className={s.container_common}>
          <Item productTab={ tabsJson[count].title} count={count}/>
        </div>
      </div>
    </div>
  );
}
