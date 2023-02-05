import { useLinkStore } from "../../stores/useLinkStore";
const UrlsList = () => {
  const Links = useLinkStore((state: { links: any }) => state.links);
  console.log(Links);
  return (
    <div className="my-30">
      <div className="container">
        <h1>UrlsList</h1>
      </div>
    </div>
  );
};

export default UrlsList;
