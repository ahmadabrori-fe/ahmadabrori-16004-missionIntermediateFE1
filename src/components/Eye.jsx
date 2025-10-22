import imageEye from "../assets/eye.png";
import styleEye from "../style/eye.module.css";

export const Eye = () => {
  return <img className={styleEye.eye} src={imageEye} alt="visibility" />;
};
