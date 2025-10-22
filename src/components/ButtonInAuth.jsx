import clsx from "clsx";
import buttonInAuth from "../style/buttonInAuth.module.css";

export const ButtonInAuth = ({ text, className, img }) => {
  return (
    <button className={clsx(buttonInAuth.button, className)}>
      {img ? (
        <img src={img} alt="logo google" className={buttonInAuth.googleIcon} />
      ) : null}
      {text}
    </button>
  );
};
