import { CardsDB, ICardsDB } from "../../data/cardsDB";
import BrandIcon from "../../icons/BrandIcon";
import style from "../../scss/features.module.scss";
import UrlsList from "../urls/UrlsList";

const Features = () => {
  const Cards = CardsDB.map((card, index) => (
    <div key={index} className={style.card}>
      <div className={style.icon}>
        <span>{card.icon}</span>
      </div>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  ));
  return (
    <div className={style.BgFeatures}>
      <UrlsList />
      <div className="container">
        <div className={style.features}>
          <h1> Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={style.cards}>
          <div className={style.line} />
          {Cards}
          {/* <div className={style.card}>
            <div className={style.icon}>
              <span>
                <BrandIcon />
              </span>
            </div>
            <h1>Brand Recognition</h1>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
