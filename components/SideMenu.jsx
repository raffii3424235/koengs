import { FaSun } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { useState } from "react";

const SideMenu = ({ toggle, theme }) => {
  const [dropT, setDropT] = useState(false);

  const themeDrop = () => {
    setDropT(!dropT);
  };

  return (
    <div className={`w-full h-screen`}>
      <div
        className={`${toggle ? "bg-[#222222]" : "bg-sky-600"} pt-6 pb-2 px-4`}
      >
        <div className="bg-blue-800 rounded-full w-16 h-16"></div>
        <div className="pt-3">
          <h1 className="text-sm font-semibold text-white">Kungs</h1>
          <p className="text-xs text-gray-300">raffifariz12@gmail.com</p>
        </div>
      </div>
      <div
        onClick={() => themeDrop()}
        className={`px-4 py-2 pt-4 text-sm font-medium flex justify-between items-center duration-300 ease-in-out ${
          dropT ? "drop-shadow-lg" : ""
        }`}
      >
        <div className="flex items-center space-x-6">
          <FaSun className="text-gray-400" size={22} />
          <p>Theme</p>
        </div>
        <MdKeyboardArrowDown
          className={`${
            dropT ? "rotate-180" : "rotate-0"
          } duration-300 ease-in-out`}
          size={22}
        />
      </div>
      {dropT ? (
        <div
          className={`${toggle ? "bg-[#363636]" : "bg-[#d8d8d8]"} ${
            dropT ? "py-1" : "opacity-0"
          } duration-300 ease-in-out`}
        >
          <div
            onClick={theme}
            className="pl-16 px-4 py-1 items-center flex justify-between text-xs font-medium"
          >
            <p className={`${toggle ? "text-white" : "text-blue-500"}`}>
              Light
            </p>
          </div>
          <div
            onClick={theme}
            className="pl-16 px-4 py-1 items-center flex justify-between text-xs font-medium"
          >
            <p className={`${toggle ? "text-blue-500" : "text-white"}`}>Dark</p>
          </div>
        </div>
      ) : (
        <div className="duration-300 ease-in-out"></div>
      )}
      <div className="px-4 py-2 text-sm font-medium flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <BsGearFill className="text-gray-400" size={22} />
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
