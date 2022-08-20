import "./CustomText.css";

const CustomText = ({
  placeholder = "",
  name = "",
  id = "",
  width = "auto",
  textAlign = "left",
  borderColor = "var(--accent)",
  placeholderColor = "var(--accent-text)",
  type = "text",
}) => {
  return (
    <input
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
