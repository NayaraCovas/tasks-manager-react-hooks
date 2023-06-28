import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd , showAdd}) => {
 
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'}  text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

//Props
Header.defaultProps = {
  title: "Task Tracker",
};

//Prop Types
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header; 
