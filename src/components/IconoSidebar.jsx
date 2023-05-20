import { PropTypes } from "prop-types";
const IconoSidebar = ({ children }) => {
  return (
    <div className="flex space-x-2 items-center cursor-pointer text-gray-300 hover:text-gray-50 transition-colors duration-500 ">
      {children}
    </div>
  );
};
export default IconoSidebar;

//Proptypes de IconoSidebar
IconoSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
