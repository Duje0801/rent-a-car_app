import Navigation from "./Navigation";
import FrontSelection from "./FrontSelection";
import frontImg from "../img/frontImg.jpg";
import "../style/components/front.css";

function Front() {
  //Navigation is child of div with className frontFr
  //Reason is that background image can be shown behind navigation when screen is 1025px or wider

  return (
    <div className="frontFr">
      <Navigation />
      <img src={frontImg} className="frontImageFr" alt="frontImage" />
      <FrontSelection />
    </div>
  );
}

export default Front;
