import "./CustomText.css";

const CustomText = ({
  placeholder = "",
  name = "",
  id = "",
  width = "auto",
  borderColor = "var(--accent)",
  placeholderColor = "var(--accent-text)",
}) => {
  return (
    <input
      className="custom-text-field"
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      style={{
        width: width,
        "--input-border-color": borderColor,
        "--input-placeholder-color": placeholderColor,
      }}
    />
  );
};

export default CustomText;
