import { useContext } from "react";
import { AppContext } from "../context/Context";

function QuestionsData() {
  const { language } = useContext(AppContext);

  if (language === `en`)
    return [
      "What documents do I need to rent a car?",
      "Can I rent a car if I'm under 25 years old?",
      "What's included in the rental price?",
      "What should I do if I have an accident or the car breaks down?",
    ];
  else
    return [
      "Koje dokumente trebam za najam automobila?",
      "Mogu li iznajmiti automobil ako imam manje od 25 godina?",
      "Što je uključeno u cijenu najma?",
      "Što trebam učiniti ako imam nesreću ili se automobil pokvari?",
    ];
}

export default QuestionsData;
