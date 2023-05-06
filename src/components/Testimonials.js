import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialsData from "../data/testimotinalsData";
import Translations from "../data/translations";
import "../style/components/testimonials.css";

function Testimonials() {
  //If screen is 1300px or narrower side boxes are hidden

  //Starting three testimonials [left blured, central clear, right blured]
  const [tmToShow, setTmToShow] = useState([0, 1, 2]);

  const testimonials = TestimonialsData();
  const translations = Translations();

  //Changing numbers (testimonials) in array
  const handleMove = (side) => {
    setTmToShow((current) => {
      if (side === `R`)
        return current.map((el) => {
          if (el === 4) return (el = 0);
          return (el += 1);
        });
      else
        return current.map((el) => {
          if (el === 0) return (el = 4);
          return (el -= 1);
        });
    });
  };

  //Setting automatically changing array (testimonials) after 15 sec
  useEffect(() => {
    setInterval(() => handleMove(`R`), 15000);
  }, []);

  //Which testimonial to show (comparing three from array with all testimonials)
  const mappedTmToShow = tmToShow.map((el) => {
    for (let i = 0; i < testimonials.length; i++) {
      if (el === i) return testimonials[i];
    }
  });

  //Mapping testimonals
  const mappedTestimonials = mappedTmToShow.map((tm, i) => {
    if (i === 1) {
      //If testimonial is central
      return (
        <div className="centralBoxAndArrowsT" key={i}>
          <div className="arrowBoxT">
            <IoIosArrowBack
              onClick={() => handleMove(`L`)}
              className="arrowT"
            />
          </div>
          <div className="boxCentralT" key={i}>
            <div>{tm.text}</div>
            <br></br>
            <div className="boxCustomerInfoT">
              <span>{tm.name} </span>
              <span>({tm.age}), </span>
              <span>{tm.country}</span>
            </div>
          </div>
          <div className="arrowBoxT">
            <IoIosArrowForward
              onClick={() => handleMove(`R`)}
              className="arrowT"
            />
          </div>
        </div>
      );
    }
    //If testimonial is side (left or right)
    else
      return (
        <div className="boxSideT" key={i}>
          <div>{tm.text}</div>
          <br></br>
          <div className="boxCustomerInfoT">
            <span>{tm.name} </span>
            <span>({tm.age}), </span>
            <span>{tm.country}</span>
          </div>
        </div>
      );
  });

  return (
    <div className="tmT">
      <div className="titleT">{translations.testimotionalsTitle}</div>
      <div className="allBoxesT">{mappedTestimonials}</div>
    </div>
  );
}

export default Testimonials;
