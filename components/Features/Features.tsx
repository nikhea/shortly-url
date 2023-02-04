import { CardsDB, ICardsDB } from "../../data/cardsDB";
import style from "../../scss/features.module.scss";

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
    <div>
      <div className="container">
        <div className={style.features}>
          <h1> Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={style.cards}>
          <div className={style.line}></div>
          {Cards}
        </div>
      </div>
    </div>
  );
};

export default Features;
