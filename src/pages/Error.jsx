import React from "react";
import err from "../img/error-404.jpg";
import s from "./page.module.scss";

export default function Error() {
  return (
    <div className={s.wrap_err}>
      <img src={err} alt="err" className={s.err} />
    </div>
  );
}
