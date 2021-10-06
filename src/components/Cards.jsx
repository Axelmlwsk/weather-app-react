import React from "react";
import style from "./Cards.module.css";
import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={style.cards}>
        {cities.map((c, key) => (
          <Card wind={c.wind} temp={c.temp} key={c.id} name={c.name} img={c.img} onClose={() => onClose(c.id)} id={c.id} />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
