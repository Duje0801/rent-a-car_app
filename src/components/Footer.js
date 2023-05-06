import Translations from "../data/translations";
import logo from "../img/logo.png";
import "../style/components/footer.css";

function Footer() {
  const translations = Translations();

  return (
    <div className="footerFo">
      <div className="columnOneFo">
        <div className="columnOneInsideFo">
          <img src={logo} alt="logo" className="logoFo"></img>
          <div>
            <div>Oldtimer</div>
            <div>Rent-a-car</div>
          </div>
        </div>
      </div>
      <div className="columnTwoFo">
        <div>{translations.HQadress}</div>
        <div>Mail: oldtimer@rentacar.com</div>
        <div>Tel: +385 (0)123 456 789</div>
        <div>Fax: +385 (9)876 543 210</div>
        <div>
          <a href="https://www.facebook.com/" target="blank" className="linkFo">
            Facebook
          </a>
          <span> | </span>
          <a
            href="https://www.instagram.com/"
            target="blank"
            className="linkFo"
          >
            {" "}
            Instagram
          </a>
          <span> | </span>
          <a href="https://www.twitter.com/" target="blank" className="linkFo">
            {" "}
            Twitter
          </a>
        </div>
      </div>
      <div className="columnThreeFo">
        <div>{translations.bussinesHours}</div>
        <div>{translations.bussinesHours2}</div>
      </div>
    </div>
  );
}

export default Footer;
