// import React from "react";
// import s from "./ItemBasket.module.scss";
// // import { useState } from "react";
// // import Basket from "../Basket/Basket";
// // import basketJson from "../data/basket.json";

// export default function ItemBasket(props) {
//   console.log(props.object);
  
//   function minus(id) {
//     const arr = props.object.basketJson.map((item) => {

//       if (item.id === id ) {
//         item.number -= 1;
//         return item;
//       }
//       return item;
//     });
//     props.object.basketJson.setCardsBasket(arr);
//   }
//   function plus(id) {
//     const arr =props.object.basketJson.map((item) => {
//       if (item.id === id ) {
//         item.number += 1;
//         return item;
//       }
//       return item;
//     });
//     props.object.basketJson.setCardsBasket(arr);
   
   
//   }
//   return (
//     <div className={s.basket_wrap}>
//       <img
//         className={s.img}
//         src={require(`../Main/images/${props.object.url}.png`)}
//         alt="food"
//       />
//       <div className={s.wr_bags_text}>
//         <p className={s.description}>{props.object.description}</p>
//         <p className={s.weight}>{props.object.weight}</p>
//         <p className={s.price}>{props.object.price}</p>
//       </div>
//       <div className={s.wr_bags_btn_container}>
//         <button
//           onClick={() => {
//             if(props.object.number>0)
//             minus(props.object.id);
//           }}
//           className={s.bags_btn}
//         >
//           -
//         </button>
//         <span className={s.number}>{props.object.number}</span>
//         <button
//           onClick={() => {
//             plus(props.object.id);
//           }}
//           className={s.bags_btn}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }
