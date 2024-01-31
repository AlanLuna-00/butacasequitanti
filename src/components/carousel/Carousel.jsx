import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import butacas from "../../../public/images/filas-asientos-rojos-teatro.jpg";
import carrousel1 from "../../../public/images/carrousel1.jpeg";
import carrousel2 from "../../../public/images/carrousel2.jpeg";
import carrousel3 from "../../../public/images/carrousel3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        // install Swiper modules
        className="carousel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // Configuración para dispositivos móviles con ancho máximo de 700px
          700: {
            slidesPerView: 1,
            // spaceBetween: 300,
          },
          // Configuración para tabletas con ancho máximo de 1024px
          1024: {
            slidesPerView: 1,
            // spaceBetween: 400,
          },
          // Configuración para pantallas más grandes
          1200: {
            slidesPerView: 1,
            // spaceBetween: 200,
          },
        }}
      >
        <SwiperSlide>
          <img
            className="carousel-img"
            src={carrousel1}
            alt="sillones laterales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="carousel-img"
            src={carrousel2}
            alt="sillones laterales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="carousel-img"
            src={carrousel3}
            alt="sillones frontales"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="carousel-img"
            src={butacas}
            alt="sillones frontales"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
