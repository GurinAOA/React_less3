import { createContext, useState, useEffect } from "react";
import GET from "../Services/GET";

export const MyContext = createContext;

export function MyContextComponent({ children }) {
  const [arrProduct, setArrProduct] = useState(false);
  const [basketCards, setBasketCards] = useState(false);
  const [flag, setFlag] = useState(false);
  const [updateRender, setUpdateRender] = useState(false);
  const value = {
    arrProduct,
    setArrProduct,
    basketCards,
    setBasketCards,
    flag,
    setFlag,
    updateRender,
    setUpdateRender,
  };

  useEffect(() => {
    getAllProducts();
  }, [updateRender]);

  async function getProduct() {
    const allproduct = await GET.getProduct();
    setArrProduct(allproduct);
  }
  async function getBasket() {
    const allbasket = await GET.getBasket();
    setBasketCards(allbasket);
  }

  async function getAllProducts() {
    await getProduct();
    await getBasket();
    setFlag(true);
  }

  if (!flag) return <h1>Loading...</h1>;
  return (
    <>
      <MyContext.Provider value={value}>{children}</MyContext.Provider>
    </>
  );
}
