const ButtonFilters = ({ children }) => {
  return (
    <button
      className=" px-5  hover:text-white font-semibold lg:font-medium text-sm lg:text-base leading-none py-1 lg:py-2  text-gray-400 bg-[#191922]  rounded-xl transition-colors duration-300"
      type="button"
    >
      {children}
    </button>
  );
};
export default ButtonFilters;
