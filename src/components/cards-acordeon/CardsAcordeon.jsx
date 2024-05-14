import "./CardsAcordeon.css";
import butacaCine from "../../../public/images/seat-istockphoto.jpg";
import granrex_1 from "../../assets/teatros/granrex/granrex_1.jpeg";
import granrex2 from "../../assets/teatros/granrex/granrex2.avif";
import granrex3 from "../../assets/teatros/granrex/granrex3.webp";
import cine1 from "../../assets/teatros/multiplex/cine1.jpeg";
import cine2 from "../../assets/teatros/multiplex/cine2.jpeg";
import cine3 from "../../assets/teatros/multiplex/cine3.jpeg";
import maipo1 from "../../assets/teatros/maipo/maipo1.webp";
import maipo2 from "../../assets/teatros/maipo/maipo2.webp";
import maipo3 from "../../assets/teatros/maipo/maipo3.jpeg";
import poli1 from "../../assets/teatros/politeama/poli1.webp";
import poli2 from "../../assets/teatros/politeama/poli2.jpeg";
import poli3 from "../../assets/teatros/politeama/poli3.jpeg";
import ave1 from "../../assets/teatros/avenida/ave1.jpeg";
import ave2 from "../../assets/teatros/avenida/ave2.jpeg";
import ave3 from "../../assets/teatros/avenida/ave3.webp";
import regi1 from "../../assets/teatros/regina/regi1.jpeg";
import regi2 from "../../assets/teatros/regina/regi2.jpeg";
import regi3 from "../../assets/teatros/regina/regi3.jpeg";
import colo1 from "../../assets/teatros/colonial/colo1.jpeg";
import colo2 from "../../assets/teatros/colonial/colo2.jpeg";
import colo3 from "../../assets/teatros/colonial/colo3.jpeg";
import { useState } from "react";

function VscFoldUp(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M1 7.4l.7.7 6-6 6 6 .7-.7L8.1 1h-.7L1 7.4zm0 6l.7.7 6-6 6 6 .7-.7L8.1 7h-.7L1 13.4z" />
    </svg>
  );
}

function VscFoldDown(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.207 1.707L13.5 1l-6 6-6-6-.707.707 6.353 6.354h.708l6.353-6.354zm0 6L13.5 7l-6 6-6-6-.707.707 6.353 6.354h.708l6.353-6.354z"
      />
    </svg>
  );
}

export const CardsAcordeon = () => {
  const imagesData = [
    {
      title: "Teatro Gran Rex -  Av. Corrientes 857 CABA",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [granrex_1, granrex2, granrex3],
    },
    {
      title: "Cines Multiplex",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [cine1, cine2, cine3],
    },
    {
      title: "Teatra Maipo - Esmeralda 443 CABA",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [maipo1, maipo2, maipo3],
    },
    {
      title: "Teatro Politeama - Paraná 353 CABA",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [poli1, poli2, poli3],
    },
    {
      title: "Teatro Avenida - Av. de Mayo 1222 CABA",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [ave1, ave2, ave3],
    },
    {
      title: "Teatro Regina - Av. Sta. Fe 1235 CABA",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [regi1, regi2, regi3],
    },
    {
      title: "Av. Bartolomé Mitre 141, Avellaneda",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [colo1, colo2, colo3],
    },
  ];

  const [openDetails, setOpenDetails] = useState({});

  const toggleDetail = (index) => {
    setOpenDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="card-acordeon-container">
      {imagesData.map(({ title, descripcion, images }, index) => (
        <div className="card-acordeon__item" key={index}>
          <div
            className="card-acordeon__summary"
            onClick={() => toggleDetail(index)}
          >
            <div className="card-acordeon__img-summary">
              {images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image}
                  alt={`image ${imageIndex + 1}`}
                  className="card-acordeon__img"
                />
              ))}
            </div>

            <p
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              {openDetails[index] ? <VscFoldUp /> : <VscFoldDown />}
            </p>
          </div>
          {openDetails[index] && (
            <div className="card-acordeon-container-text">
              <span className="title-card">{title}</span>
              <p className="card-acordeon__description-text--hidden-paragraph">
                {descripcion}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
