import styleTitle from "../style/titleInAuth.module.css";

export const TitleInAuth = ({ title, subtitle }) => {
  return (
    <div className={styleTitle.titleLogin}>
      <h1>{title}</h1>
      <p className={styleTitle.subtitle}>{subtitle}</p>
    </div>
  );
};
