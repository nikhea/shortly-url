import style from "../../scss/boost.module.scss";
import Image from "next/image";
import BoostDesktop from "../../public/images/bg-boost-desktop.svg";
import BoostMobile from "../../public/images/bg-boost-mobile.svg";
const Boost = () => {
  return (
    <div className={style.bg}>
      {/* <picture>
        <source media="(min-width: 768px)" srcSet={BoostDesktop} />
        <Image src={BoostMobile} alt={BoostMobile.src} />
      </picture> */}

      <div className="container">
        <h1>boost your links today</h1>
        <button className="btn-full">get started</button>
      </div>
    </div>
  );
};

export default Boost;
