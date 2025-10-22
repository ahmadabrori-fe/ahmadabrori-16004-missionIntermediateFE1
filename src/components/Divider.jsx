import styleDivider from "../style/divider.module.css";
import divider from "../assets/Divider.png";

export const Divider = () => {
  return (
    <>
      <div className={styleDivider.or}>
        <p className={styleDivider.orText}>atau</p>
      </div>
      <img src={divider} alt="divder" className={styleDivider.divider} />
    </>
  );
};
