import React from "react";
import "./Clientes.css";
// Logos >>>
import buenosAires from "../../../public/images/buenos-aires-ciudad-logo.png";
import lacosta from "../../assets/clientes/lacosta.jpeg";
import granRex from "../../assets/clientes/granrex.png";
import cineMultiplex from "../../assets/clientes/ multiplex.jpeg";
import gba from "../../assets/clientes/gba.webp";
import lyf from "../../assets/clientes/lyf.png";
import regi from "../../assets/clientes/regi.png";

export const Clientes = () => {
  const clientes = [
    { nombre: "CABA", logo: buenosAires },
    { nombre: "La Costa", logo: lacosta },
    { nombre: "Gran Rex", logo: granRex },
    { nombre: "Cine Multiplex", logo: cineMultiplex },
    { nombre: "GBA", logo: gba },
    { nombre: "Luz y Fuerzas", logo: lyf },
    { nombre: "Teatro Regina", logo: regi },
    // { nombre: "Buenos Aires", logo: buenosAires },
  ];

  return (
    <div className="clientes-container">
      {clientes.map(({ nombre, logo }, index) => (
        <img key={index} src={logo} alt={nombre} />
      ))}
    </div>
  );
};
