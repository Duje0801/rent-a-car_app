import logo from "../img/logo.png";
import "../style/components/logo.css";

function Logo1() {

  //First company logo that appears between fleet and explore
  //Only on bigger tablets and laptops (only on screens 1300px and bigger)

  return (
    <div className="logo1Break">
      <img src={logo} alt="logo" className="logoBreakImg"></img>
    </div>
  );
}

export default Logo1;
