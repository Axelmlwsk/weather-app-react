import React from "react";
import style from "./Card.module.css";
import { AiFillDelete } from "react-icons/ai";

export default function Card({ temp, name, img, onClose, id, wind }) {
  return (
    <div className={style.card}>
      <button className={style.deleteButton} onClick={onClose}>
        <AiFillDelete />
      </button>
      <div className={style.infoCard}>
        <h5 className={style.city}>{name}</h5>
        <p className={style.temp}>{temp}</p>
        <p className={style.wind}>{wind}</p>
        <img className="iconoClima" src={`http://openweathermap.org/img/wn/${img}@2x.png`} width="80" height="80" alt="" />
      </div>
    </div>
  );
}
