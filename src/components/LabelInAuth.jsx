import styleLabel from "../style/labelInAuth.module.css";

export const LabelInAuth = ({ type, text }) => {
  return (
    <label htmlFor={type}>
      {text}
      <span className={styleLabel.star}>*</span>
    </label>
  );
};
