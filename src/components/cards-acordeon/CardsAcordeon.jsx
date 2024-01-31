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
      title: "descripcion del trabajo 3",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      images: [butacaCine, butacaCine, granrex_1],
    },
  ];

  return (
    <div className="card-acordeon-container">
      {imagesData.map(({ title, descripcion, images }, index) => (
        <details className="card-acordeon__details" key={index}>
          <summary className="card-acordeon__img-summary">
            {/* Render the three images for each item */}
            {images.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={image}
                alt={`image ${imageIndex + 1}`}
              />
            ))}
          </summary>
          <div className="card-acordeon-container-text">
            <span className="title-card">{title}</span>
            <p className="card-acordeon__description-text--hidden-paragraph">
              {descripcion}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
};
