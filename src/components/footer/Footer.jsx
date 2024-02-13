import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Butacas <span>Equitanti</span>
        </h3>

        {/* <p className="footer-links">
					<a href="#" className="link-1"
					onClick={() => handleLinkClick("trabajos-anteriores")}
					>Inicio</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p> */}

        {/* <p className="footer-company-name">Company Name © 2015</p> */}
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            Ramos Mejia <span>La Matanza, Buenos Aires</span>
          </p>
        </div>

        {/* <div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div> */}

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a
              href="mailto:butacasequitanti@hotmail.com
"
            >
              butacasequitanti@hotmail.com
            </a>
          </p>
        </div>
        <div>
          <a
            href="https://www.instagram.com/butacasequitanti/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              alt="instagram logo"
              width="30px"
              height="30px"
              style={
                // media query
                window.matchMedia("(max-width: 600px)").matches
                  ? { margin: "0" }
                  : { margin: "0 0 0 30px" }
              }
            />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Nuestra compania</span>
          Equipamiento para cines y teatros desde 1942. Calidad y servicio
          líderes. Tapicería, butacas y más para disfrutar del arte.
        </p>

        {/* <div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div> */}
      </div>

      <p className="copyright">
        Butacas Equitanti &copy; Todos los derechos reservados - 2024
      </p>
    </footer>
  );
};
