import {
  RiHome5Fill,
  RiCloseFill,
  RiCompassDiscoverFill,
  RiLayout3Fill,
  RiTeamFill,
  RiFeedbackFill,
  RiContactsBookFill,
} from "react-icons/ri";
import IconoSidebar from "./IconoSidebar";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <section
      className={`bg-[#191922] z-50 col-span-1 w-full lg:w-72 h-screen space-y-10 fixed top-0  transition-all duration-500 ${
        !isOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
      } `}
    >
      <div className="col-span-1 lg:col-span-2 h-24 flex  items-center justify-between p-4 ">
        <img src="./icono.svg" alt="" className="w-14 h-14" />
        <button
          className="lg:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiCloseFill className="text-3xl text-gray-300 " />
        </button>
      </div>

      <div className="px-8 space-y-7">
        <IconoSidebar>
          <RiHome5Fill className="text-xl " />
          <span className="text-lg font-medium ">Home</span>
        </IconoSidebar>
        <IconoSidebar>
          <RiCompassDiscoverFill className="text-xl " />
          <span className="text-lg font-medium ">Discover</span>
        </IconoSidebar>
        <IconoSidebar>
          <RiLayout3Fill className="text-xl " />
          <span className="text-lg font-medium ">Popular Products</span>
        </IconoSidebar>
        <IconoSidebar>
          <RiTeamFill className="text-xl " />
          <span className="text-lg font-medium ">Top Authors</span>
        </IconoSidebar>
        <IconoSidebar>
          <RiFeedbackFill className="text-xl " />
          <span className="text-lg font-medium ">Feed</span>
        </IconoSidebar>
        <IconoSidebar>
          <RiContactsBookFill className="text-xl " />
          <span className="text-lg font-medium ">Contact</span>
        </IconoSidebar>
      </div>
    </section>
  );
};
export default Sidebar;
