import "./Footer.css";

export const Footer = () => {
  const handleLinkClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".top-nav").offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const isMobile = window.innerWidth <= 768;
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>Butacas Equitanti</h3>
            <li onClick={() => handleLinkClick("inicio")}>Inicio</li>

            <li onClick={() => handleLinkClick("descripcion")}>
              Sobre nosotros
            </li>

            <li onClick={() => handleLinkClick("trabajos-anteriores")}>
              Trabajos anteriores
            </li>

            <li onClick={() => handleLinkClick("caracteristicas")}>
              Caracteristicas
            </li>

            <li onClick={() => handleLinkClick("experiencia")}>
              Nuestra experiencia
            </li>

            <li onClick={() => handleLinkClick("nuestros-clientes")}>
              Nuestros clientes
            </li>
          </ul>

          <ul className="footer-compania">
            <h3>Nuestra compania</h3>
            <li>
              <span>
                Equipamiento para cines y teatros desde 1942.
                <br />
                Calidad y servicio líderes.
                <br />
                Tapicería, butacas y más para disfrutar del arte
              </span>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Contactanos!</h3>
          <p>
            <a
              href="mailto:butacasequitanti@hotmail.com
"
            >
              butacasequitanti@hotmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="social">
        <a
          href="https://www.instagram.com/butacasequitanti?igsh=d3F2YmVuOXczM24x"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <i className="fab fa-facebook"></i>
        <a
          href="https://maps.app.goo.gl/9rz4Eihv8Ggm1Etb8"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-map-pin" aria-hidden="true"></i>
        </a>
      </div>
      <div className="info">
        <div className="legal">
          <span>Ramos Mejia, La Matanza, Buenos Aires </span>
        </div>
        <div className="copyright">2024 Copyright &copy; Butacas Equitanti</div>
      </div>
    </footer>
  );
};
