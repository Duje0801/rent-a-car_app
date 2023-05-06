import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import Translations from "../data/translations";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/contact.css";

function Contact() {
  const translate = Translations();

  return (
    <div>
      <div className="frontC">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageC" />
        <div className="contactC">
          <div>{translate.contact}</div>
          <div className="contactListC">
            <div>{translate.HQadress}</div>
            <div>mail: oldtimer@rentacar.com</div>
            <div>tel: +385 (0)123 456 789</div>
            <div>fax: +385 (9)876 543 210</div>
            <div className="socialNetworkC">
              <a
                href="https://www.facebook.com/"
                target="blank"
                className="linkC"
              >
                <GrFacebook /> Facebook
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="linkC"
              >
                <GrInstagram /> Instagram
              </a>
              <a
                href="https://www.twitter.com/"
                target="blank"
                className="linkC"
              >
                <GrTwitter /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default Contact;
