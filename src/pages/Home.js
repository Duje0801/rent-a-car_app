import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import Reservation from "./Reservation";
import Front from "../components/Front";
import Fleet from "../components/FleetComponent";
import Logo1 from "../components/Logo1";
import Logo2 from "../components/Logo2";
import Explore from "../components/Explore";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import "../style/index.css";

function Home() {
  //State which have info will additional (scroll) navigation appear or not
  const [showNavigation, setShowNavigation] = useState(false);

  const { reservation } = useContext(AppContext);

  useEffect(() => {
    function handleScroll() {
      //Navigation will show when top of the viewport is lower than 10% of total screen height from the top
      if (window.pageYOffset >= window.innerHeight * 0.1) return setShowNavigation(true);
      else setShowNavigation(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (reservation) {
    return <Reservation />;
  } else {
    return (
      <>
        <div>
          <Front />
          <Fleet />
          <Logo1 />
          <Explore />
          <Logo2 />
          <Testimonials />
          <Footer />
        </div>
        {showNavigation && <Navigation showNavigation={showNavigation} />}
        <Chat />
      </>
    );
  }
}

export default Home;
