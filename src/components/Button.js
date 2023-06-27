import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

//Props
Button.defaultProps = {
  color: "steelblue",
};

//PropTypes

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  conClick: PropTypes.func,
};
export default Button;
