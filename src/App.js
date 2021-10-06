import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";

export default function App() {
  const apiKey = `afdece7c7c8e7f6d4efdf43e9a16e72d`;

  const [cities, setCities] = useState([]);

  const onSearch = (ciudad) => {
    console.log(ciudad);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=afdece7c7c8e7f6d4efdf43e9a16e72d&units=metric`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: `${Math.round(recurso.wind.speed)}km/h`,
            temp: `${Math.round(recurso.main.temp)}°`,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  };

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id != id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
