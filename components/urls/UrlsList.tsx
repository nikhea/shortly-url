import Link from "next/link";
import { useState } from "react";
import style from "../../scss/urls.module.scss";
import { useLinkStore, LinkItems } from "../../stores/useLinkStore";
const UrlsList = () => {
  // const [buttonText, setButtonText] = useState("copy");
  const [copiedId, setCopiedId] = useState(-1);
  const Links = useLinkStore((state: { links: any }) => state.links);
  const handleCopy = (id: number) => {
    const copiedText = Links.find((link: LinkItems) => {
      navigator.clipboard.writeText(
        Links.find((link: LinkItems) => link.id === id)?.full_short_link
      );
      setCopiedId(id);
    });

    return copiedText;
  };
  const showLink = Links.map((link: LinkItems) => (
    <div key={link.id} className={style.card}>
      <p className={style.orginal}>
        {link.original_link.length > 41
          ? `${link.original_link.substring(0, 41)}...`
          : `${link.original_link}`}
      </p>
      <hr className={style.hr} />
      <div>
        <p className={style.short}>
          <Link href={`${link.full_short_link}`} target="_blank">
            {link.full_short_link}
          </Link>
        </p>
        <button
          style={{
            backgroundColor: link.id === copiedId ? "#3b3054" : "",
          }}
          onClick={() => handleCopy(link.id)}
          className="btn-half "
        >
          {link.id === copiedId ? "copied!" : "copy"}
        </button>
      </div>
    </div>
  ));
  return <div className="container my-30">{showLink}</div>;
};

export default UrlsList;

// if (link.id === id) {
//   navigator.clipboard.writeText(link.full_short_link);
//   setButtonText("copied!");
// }
// if (link.id !== id) {
//   setButtonText("copy");
// }
