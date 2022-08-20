import "./CustomText.css";

const CustomText = ({
  value,
  setValue,
  placeholder = "",
  name = "",
  id = "",
  width = "auto",
  textAlign = "left",
  borderColor = "var(--accent)",
  placeholderColor = "var(--accent-text)",
  type = "text",
}) => {
  const changeValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={changeValue}
      className="custom-text-field"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      style={{
        width: width,
        "--input-border-color": borderColor,
        "--input-placeholder-color": placeholderColor,
        "--input-text-align": textAlign,
      }}
    />
  );
};

export default CustomText;
