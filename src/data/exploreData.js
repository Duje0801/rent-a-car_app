import { useContext } from "react";
import { AppContext } from "../context/Context";
import croatia1 from "../img/croatia1.jpg";
import croatia2 from "../img/croatia2.jpg";
import croatia3 from "../img/croatia3.jpg";

function ExploreData() {
  const { language } = useContext(AppContext);

  if (language === `en`)
    return [
      {
        text: `Experience the beauty of Croatia's national parks as you drive through 
        winding roads and scenic routes. Stop by the cascading waterfalls or hike along 
        the trails for a closer look at Croatia's natural wonders.`,
        img: croatia1,
      },

      {
        text: `Step back in time and discover the rich history and culture of Croatia. Wander 
        through the narrow alleyways of Dubrovnik's Old Town or admire 
        the stunning architecture of Split's Diocletian's Palace. Each city has its 
        own story to tell.`,
        img: croatia2,
      },

      {
        text: `Get away from the hustle and bustle of the city and immerse yourself in 
        Croatia's stunning natural beauty. Drive through lush green forests and rolling 
        hills as you take in the breathtaking views. Croatia's natural wonders are 
        waiting to be explored.`,
        img: croatia3,
      },
    ];
  else
    return [
      {
        text: `Doživite ljepotu hrvatskih nacionalnih parkova vozeći se kroz zavojite ceste i 
        slikovite rute. Zaustavite se kraj slapova ili planinarite stazama za bolji doživljaj 
        prirodnih čuda.`,
        img: croatia1,
      },

      {
        text: `Vratite se u prošlost i otkrijte bogatu povijest i kulturu Hrvatske. Prošetajte
        kroz uske uličice dubrovačkog Starog grada ili se divite
        zapanjujućoj arhitekturi splitske Dioklecijanove palače. Svaki grad ima svoju
        vlastitu priču za ispričati.`,
        img: croatia2,
      },

      {
        text: `Pobjegnite od gradske vreve i uronite u zapanjujuće prirodne ljepote Hrvatske. 
            Vozite kroz bujne zelene šume i brda dok uživate u pogledima koji oduzimaju dah. 
            Hrvatska čuda prirode vas čekaju da ih istražite.`,
        img: croatia3,
      },
    ];
}

export default ExploreData;
