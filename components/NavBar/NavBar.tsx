import style from "../../scss/navBar.module.scss";
import Logo from "../../public/images/logo.svg";
import HumbergerOpen from "../../public/images/icon-hamburger.svg";
import HumbergerClose from "../../public/images/icon-close.svg";
import Image from "next/image";
import { useState } from "react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navList = ["home", "about", "contact", "blog", "careers"];
  return (
    <div className="container">
      <div className={style.navBar}>
        <div className={style.navBarLeft}>
          <div className={style.logo}>
            <Image
              className={style.logoImage}
              src={Logo}
              alt={Logo.src}
              height="100"
              width="100"
            />
          </div>
          <div className={style.link}>
            <ul>
              <li className={style.linkItem}> features</li>
              <li className={style.linkItem}> pricing</li>
              <li className={style.linkItem}> resources</li>
            </ul>
          </div>
        </div>
        <div className={style.navBarRight}>
          <ul>
            <li className={style.linkItem}>login</li>
            <li className={style.linkItem}>
              <button className={style.btn}>sign up</button>
            </li>
          </ul>
        </div>

        {isMenuOpen ? (
          <>
            <div className={style.mobile}>
              <div className={style.link}>
                <ul>
                  <li className={style.linkItem}> features</li>
                  <li className={style.linkItem}> pricing</li>
                  <li className={style.linkItem}> resources</li>
                </ul>
                <hr />
                <li className={style.linkItem}>login</li>
                <li className={style.linkItem}>
                  <button className={style.btn}>sign up</button>
                </li>
              </div>
            </div>
          </>
        ) : null}

        <div
          className="HumbergerContainer lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {/* <div> */}
          {!isMenuOpen ? (
            <Image
              src={HumbergerOpen}
              alt={HumbergerOpen.src}
              height="100"
              width="100"
            />
          ) : (
            <Image
              src={HumbergerClose}
              alt={HumbergerClose.src}
              height="100"
              width="100"
            />
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="HumbergerContainer" onClick={toggleMenu}>
          <div>{!isMenuOpen ? "open" : "closed"}</div>
        </div> */
}
export default NavBar;
