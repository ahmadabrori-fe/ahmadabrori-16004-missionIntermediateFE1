export const Select = ({
  name,
  id,
  value1,
  value2,
  text1,
  text2,
  className,
}) => {
  return (
    <select name={name} id={id} className={className}>
      <option value={value1}>{text1}</option>
      <option value={value2}>{text2}</option>
    </select>
  );
};
