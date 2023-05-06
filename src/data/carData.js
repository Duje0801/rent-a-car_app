import { useContext } from "react";
import { AppContext } from "../context/Context";
import car1 from "../img/car1.png";
import car2 from "../img/car2.png";
import car3 from "../img/car3.png";
import car4 from "../img/car4.png";

function CarData() {
  const { language } = useContext(AppContext);

  return [
    {
      img: car1,
      category: language === `en` ? `Budget class` : `Niža klasa`,
      make: `DAF`,
      model: `600`,
      year: 1963,
      engine: language === `en` ? `Petrol` : `Benzin`,
      power: 22,
      price: 100,
    },
    {
      img: car2,
      category: language === `en` ? `Middle class` : `Srednja klasa`,
      make: `BMW`,
      model: `02 Series`,
      year: 1977,
      engine: language === `en` ? `Petrol` : `Benzin`,
      power: 89,
      price: 200,
    },
    {
      img: car3,
      category: language === `en` ? `Higher class` : `Viša klasa`,
      make: `AR`,
      model: `Montreal`,
      year: 1977,
      engine: language === `en` ? `Petrol` : `Benzin`,
      power: 200,
      price: 350,
    },
    {
      img: car4,
      category: language === `en` ? `Luxury class` : `Luksuzna klasa`,
      make: `Cadillac`,
      model: `Eldorado`,
      year: 1958,
      engine: language === `en` ? `Diesel` : `Dizel`,
      power: 335,
      price: 500,
    },
  ];
}

export default CarData;
