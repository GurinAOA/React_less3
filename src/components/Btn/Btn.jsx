import React from 'react'
import s from "./btn.module.scss";
export default function Btn() {
  return (
    <div className={s.container}>
    <button className={s.btn}>Добавить</button>
    </div>
  )
}
