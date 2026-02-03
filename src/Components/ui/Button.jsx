import "./../../App.css";

const Button = ({
  label = "submit",
  icon,
  id,
  size = "md",
  color = "primary",
}) => {
  const btnSize = {
    lg: "350px",
    md: "250px",
    sm: "150px",
  };

  const btnColor = {
    primary: "#4338ca",
    danger: "#991b1b",
  };

  return (
    <div>
      <button
        type="submit"
        id={id}
        className="btn"
        style={{
          backgroundColor: btnColor[color],
          width: btnSize[size],
        }}
      >
        {label}
        {icon}
      </button>
    </div>
  );
};

export default Button;
