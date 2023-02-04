import style from "../../scss/footer.module.scss";
import Image from "next/image";
import FaceBook from "../../icons/FaceBook";
import Twitter from "../../icons/twitter";
import Pinterest from "../../icons/Pinterest";
import Instagram from "../../icons/instagram";
import FooterLogo from "../../public/images/footer-logo.svg";
const Footer = () => {
  return (
    <div className={style.footerBg}>
      <div className="container">
        <div className={style.footer}>
          <div className={style.logo}>
            <Image
              className={style.logoImage}
              src={FooterLogo}
              alt={FooterLogo.src}
              height="100"
              width="100"
            />
          </div>
          <div className={style.footerLinks}>
            <div className={style.links}>
              <h3> Features</h3>
              <div className={style.link}>
                <ul>
                  <li className={style.linkItem}> Link Shortening</li>
                  <li className={style.linkItem}> Branded Links</li>
                  <li className={style.linkItem}> Analytics</li>
                </ul>
              </div>
            </div>
            <div className={style.links}>
              <h3> Resources</h3>
              <div className={style.link}>
                <ul>
                  <li className={style.linkItem}> Blog</li>
                  <li className={style.linkItem}> Developers</li>
                  <li className={style.linkItem}> Support</li>
                </ul>
              </div>
            </div>
            <div className={style.links}>
              <h3> Company</h3>
              <div className={style.link}>
                <ul>
                  <li className={style.linkItem}> Our Team</li>
                  <li className={style.linkItem}> Careers</li>
                  <li className={style.linkItem}> Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.social}>
            <FaceBook className="cursor-pointer hover:fill-[#2acfcf]" />
            <Twitter className="cursor-pointer hover:fill-[#2acfcf]" />
            <Pinterest className="cursor-pointer hover:fill-[#2acfcf]" />
            <Instagram className="cursor-pointer hover:fill-[#2acfcf]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <Image
              className={style.socialIcon}
              src={faceBook}
              alt={faceBook.src}
              height="100"
              width="100"
            /> */
}
{
  /* <Image
className={style.socialIcon}
src={twitter}
alt={twitter.src}
height="100"
width="100"
/>
<Image
className={style.socialIcon}
src={pinterest}
alt={pinterest.src}
height="100"
width="100"
/>
<Image
className={style.socialIcon}
src={instagram}
alt={instagram.src}
height="100"
width="100"
/> */
}
