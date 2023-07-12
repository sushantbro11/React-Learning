import { useEffect, useState } from "react";
import rgbToHex from "./utlis";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  // rgb value lai join into string inline styles ko
  // lagi seperated by commas
  console.log(bcg);
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index >= 5 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value ">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
