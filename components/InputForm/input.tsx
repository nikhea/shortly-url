import style from "../../scss/InputForm.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLinkStore } from "../../stores/useLinkStore";

const input = () => {
  const [urlValue, seturlValue] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Please add a link");
  const addLink = useLinkStore((state) => state.addLink);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (urlValue === "" || urlValue === undefined) {
      setErrors(true);
      setErrorMsg("Please add a link");
      return;
    }
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${urlValue}`
    );
    const data = await response.json();
    if (data.error) {
      const msg = data.error;
      setErrors(true);
      setErrorMsg(msg);
    }
    if (data.result) {
      const links = {
        id: uuidv4(),
        full_short_link: data.result.full_short_link,
        original_link: data.result.original_link,
      };
      addLink(links);
      seturlValue("");
      // setErrors(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setErrors(false);
    seturlValue(e.target.value);
  };

  // console.log(errorMsg);
  return (
    <div className="container relative top-16">
      <div className={style.Formcontainer}>
        <form onSubmit={handleSubmit}>
          <span className="w-full lg:w-[90%] lg:relative">
            <input
              onChange={handleChange}
              type="text"
              value={urlValue}
              placeholder="Shorten a link here..."
              // style={{
              //   border: errors ? "2px solid red" : "",
              // }}
            />

            <p className="text-red-500 lg:absolute">
              {errors && errorMsg.substring(0, 23)}
            </p>
          </span>
          <button className="btn-half" type="submit">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
};
{
  /* <p>{errors && "Please add a link"}</p> */
}
export default input;
// {errors && errorMsg.substring(0, 23)}
