import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import s from "./page.module.scss";
export default function About() {
  return (
    <div>
      <Header />
      <div className={s.cont}>
      <h2 className={s.headling}>О нас</h2>
      <p className={s.text}>
        О ресторане В 2023 году в самом центре города М мы открыли первый
        ресторан с вкуснейшими и свежайшими бургерами, закусками, хот-догами.
        Основной фишкой нашего меню являются бургеры… настоящие… вкусные…
        Приготовленные умелыми руками наших поваров наши бургеры и прочая
        фаст-фуд еда не оставят вас равнодушными и вы будете возвращаться к нам
        снова и снова. Вы сможете отведать бургеры на любой вкус… с говядиной… с
        курицей… с рыбой…а также вегетарианский вариант бургера. И, конечно,
        булки для бургеров мы делаем сами. Прекрасным дополнением станет кружка
        холодного крафтового пива или чашечка ароматного кофе с десертом.
        Специально для вас мы создали уютное место на гастрономической карте
        города М. YourMeal– мы знаем, каким должен быть настоящий фаст-фуд.
      </p>
      <h3 className={s.title}>Мы находимся</h3>
      <div className={s.wrap}>
      <span className={s.mail}>info@moiii.by </span>
      <span className={s.address}>2240550, Беларусь, г.Минск, ул. Маяковского 21</span>
      </div>
      </div>
      <Footer />
    </div>
  );
}
