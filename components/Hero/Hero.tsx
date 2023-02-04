import style from "../../scss/hero.module.scss";
import Image from "next/image";
import React from "react";
import BgDesktop from "../../public/images/illustration-working.svg";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className="container">
        <div className={style.flexHero}>
          <div className={style.textContainer}>
            <h1> More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn-full">get started</button>
          </div>
          <div className={style.imageContainer}>
            <Image src={BgDesktop} alt={BgDesktop.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
