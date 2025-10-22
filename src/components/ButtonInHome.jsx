import styleButtonInHome from "../style/buttonInHome.module.css";

export const ButtonInHome = ({ text }) => {
  return (
    <button type="button" className={styleButtonInHome.buttonVideoCourse}>
      {text}
    </button>
  );
};
