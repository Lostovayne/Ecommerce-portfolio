import ButtonFilters from "./ButtonFilters";

const TextosBusqueda = () => {
  return (
    <div className="lg:translate-x-44 ">
      <span className="text-base text-gray-400 font-medium pl-4 lg:pl-0 ">
        Discover / Electronics
      </span>
      <h2 className="text-2xl font-medium text-white pl-4  lg:pl-0 ">
        Available Products
      </h2>
      <section className=" pl-4 py-2  flex gap-4 overflow-x-auto justify-between overscroll-x-none w-10/12 lg:pl-0 lg:mb-2 ">
        <ButtonFilters>All</ButtonFilters>
        <ButtonFilters>Bags</ButtonFilters>
        <ButtonFilters>Food</ButtonFilters>
        <ButtonFilters>Books</ButtonFilters>
        <ButtonFilters>Clothes</ButtonFilters>
        <ButtonFilters>Grocery</ButtonFilters>
        <ButtonFilters>Furniture</ButtonFilters>
        <ButtonFilters>Baby care</ButtonFilters>
        <ButtonFilters>Stationery</ButtonFilters>
      </section>
    </div>
  );
};
export default TextosBusqueda;
