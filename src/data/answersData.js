import { useContext } from "react";
import { AppContext } from "../context/Context";

function AnswersData() {
  const { language } = useContext(AppContext);

  if (language === `en`)
    return [
      <div className="FAQAnswer">
        You will need a valid driver's license, a credit card in your name, and
        sometimes proof of insurance.
      </div>,
      <div className="FAQAnswer">
        "Oldtimer" Rent-a-car have age restriction and require driver to be at
        least 25 years old.
      </div>,
      <div className="FAQAnswer">
        Rental prices typically include the cost of the car, insurance coverage,
        and any applicable taxes and fees. However, additional options such as
        additional driver may incur additional charges.
      </div>,
      <div className="FAQAnswer">
        In the event of an accident, you must contact us immediately and follow
        instructions. If the car breaks down, we offer roadside assistance, so
        you should call the provided number for help. It's important to
        familiarize yourself with the rental company's policies and procedures.
      </div>,
    ];
  else
    return [
      <div className="FAQAnswer">
        Trebati će vam valjana vozačka dozvola, kreditna kartica na vaše ime i
        može zatrebati dokaz o osiguranju.
      </div>,
      <div className="FAQAnswer">
        "Oldtimer" Rent-a-car ima ograničenje starosti i zahtijeva da vozač bude
        barem 25 godina star.
      </div>,
      <div className="FAQAnswer">
        Cijena najma obično uključuje troškove najma automobila, osiguranje, te
        sve primjenjive poreze i naknade. Međutim, dodatne opcije poput dodatnog
        vozača mogu dovesti do dodatnih troškova.
      </div>,
      <div className="FAQAnswer">
        U slučaju nesreće, morate nas odmah kontaktirati i slijediti upute. Ako
        se automobil pokvari, nudimo pomoć na cesti, pa biste trebali nazvati
        pruženi broj za pomoć. Važno je upoznati se s politikama i postupcima
        rent-a-car tvrtke.
      </div>,
    ];
}

export default AnswersData;
