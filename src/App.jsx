import { useState } from "react";
import {
  RiMore2Fill,
  RiSearch2Line,
  RiShoppingCart2Fill,
  RiNotification3Fill,
  RiMoonClearFill,
  RiMicFill,
  RiShoppingCartFill,
} from "react-icons/ri";
import {motion} from "framer-motion"
import Sidebar from "./components/Sidebar";

import { Productos } from "./data/Productos";
import TextosBusqueda from "./components/TextosBusqueda";
import ButtonCart from "./components/ButtonCart";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <h1 className=" min-h-screen grid grid-cols-1 lg:grid-cols-12 ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="col-span-1 lg:col-span-12 ">
        <div className="col-span-1 lg:col-span-2 h-24 flex  items-center justify-between p-4 ">
          <img src="./icono.svg" alt="" className="w-14 h-14" />
          {/* Menu */}
          <div className="lg:pr-16 flex items-center space-x-7 ">
            <div className="flex items-center bg-gray-700 py-1.5 mt-1 lg:mt-0 justify-between px-2 rounded-lg w-60 ">
              <RiMicFill className="text-xl text-gray-300" />
              <input
                type="text"
                placeholder="Search"
                className="border-none text-base text-gray-300 w-44 pl-1.5 rounded-lg bg-transparent focus:outline-none placeholder:text-gray-200 font-medium"
              />
              <RiSearch2Line className="text-xl text-gray-300 mr-1 cursor-pointer" />
            </div>

            {/* user */}
            <div className=" items-center text-gray-300 text-xl gap-4 hidden md:flex ">
              <RiMoonClearFill className="cursor-pointer hover:text-white " />
              <RiNotification3Fill className="cursor-pointer hover:text-white " />
              <RiShoppingCart2Fill className="cursor-pointer hover:text-white" />
              <img
                src="https://img.freepik.com/free-photo/portrait-attractive-young-man-dressed-casually-using-tablet-computer-smiling-white-background_662251-2948.jpg?w=900&t=st=1684553725~exp=1684554325~hmac=4a58495d1aeef9f9dd69dbc17b1a68662f53f4d4f9edf9af7fe033e862bf5051"
                alt="imagen usuario"
                className="w-9 h-9 rounded-full object-cover border border-gray-500 "
              />
            </div>
          </div>
          <button
            className="lg:hidden"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RiMore2Fill className="text-3xl text-gray-300" />
          </button>
        </div>

        <div className="container w-full h-full  xl:pl-36 mx-auto md:pr-16">

          <TextosBusqueda />
          <div className=" xl:ml-16 flex w-full items-center justify-between flex-wrap lg:px-10 mx-auto mt-2 lg:mt-8 gap-10 ">
            {/* cards */}
            {Productos.map((producto) => (
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{ delay:0.2, duration:0.5}}
              viewport={{once:true, amount:0.5}}
              variants={{
                hidden:{opacity:0, scale:0.8},
                show:{opacity:1, scale:1},}}
              className=" mb-5 w-[90%] mx-auto lg:w-72 " key={producto.id}>
                <div className="bg-[#191922]  lg:w-72 h-72 rounded-lg mb-3 overflow-hidden cursor-pointer flex items-center justify-center">
                  <img
                    src={producto.img}
                    alt=""
                    className="w-44 max-h-48 object-contain hover:scale-150 hover:translate-x-12 transition-all duration-700"
                  />
                </div>

                <div className="flex flex-col w-full ">
                  <div className="flex items-center  w-full py-2 lg:w-72 gap-3 ">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-attractive-young-man-dressed-casually-using-tablet-computer-smiling-white-background_662251-2948.jpg?w=900&t=st=1684553725~exp=1684554325~hmac=4a58495d1aeef9f9dd69dbc17b1a68662f53f4d4f9edf9af7fe033e862bf5051"
                      alt="imagen usuario"
                      className="w-9 h-9 rounded-full object-cover border-2 border-gray-600 "
                    />
                    <h3 className="text-base  font-medium text-white">
                      {producto.name}
                    </h3>
                  </div>
                  <span className="text-gray-300 text-base py-1 px-2">
                    Eshop Spot
                  </span>
                  <div className="flex gap-2 px-2 justify-between w-full">
                    <div className="flex items-center  gap-2">
                      <span className="text-sm font-bold  text-[#FFC831]">
                        ${producto.price}
                      </span>
                      <span className="text-sm font-medium text-gray-300 line-through ">
                        $1,999,999
                      </span>
                    </div>

                    <ButtonCart/>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </h1>
  );
}
