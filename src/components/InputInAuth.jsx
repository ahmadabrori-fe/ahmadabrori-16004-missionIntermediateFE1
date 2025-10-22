import styleInput from "../style/inputInAuth.module.css";

export const InputInAuth = ({ type, name, id, placeholder }) => {
  return (
    <input
      className={styleInput.input}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required
    />
  );
};
