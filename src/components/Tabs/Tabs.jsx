import React from "react";
import s from "./tabs.module.scss";
import tabs from "../data/tabs.json";

export default function Tabs(props) {
  function handleClick(index) {
    props.editCount(index);
  }
  return (
    <div className={s.wr_tab}>
      <div className={s.tab}>
        {tabs.map((element, index) => (
          <div className={s.sp} key={index}>
            <div
              onClick={() => {
                handleClick(index);
              }}
              className={s.icon}
            >
              <img
                src={require(`../Main/images/${element.url}.svg`)}
                className={s.icons}
                alt="icon"
              ></img>
              <button className={s.title}>{element.categories}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
