import ExploreData from "../data/exploreData";
import Translations from "../data/translations";
import "../style/components/explore.css";

function Explore() {
  //Explore is visible only on bigger tablets and PC (1300px or wider)

  const explore = ExploreData();
  const translate = Translations();

  const mappedExplore = explore.map((ex, i) => {
    return (
      <div className="exploreBoxE" key={i}>
        <img src={ex.img} alt="exploreImage" className="exploreImgE"></img>
        <div className="exploreTextE">{ex.text}</div>
      </div>
    );
  });

  return (
    <div className="exploreE">
      <div className="titleE">{translate.exploreTitle}</div>
      <div className="exploreDivsE">{mappedExplore}</div>
    </div>
  );
}

export default Explore;
