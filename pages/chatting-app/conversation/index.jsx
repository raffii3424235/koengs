import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import SideMenu from "../../../components/SideMenu";
import { BsCheckAll } from "react-icons/bs";
import DisplayChat from "../../../components/DisplayChat";

const Conversation = () => {
  const [toggle, setToggle] = useState(true);
  const [nav, setNav] = useState(false);

  const handleMenu = () => {
    setNav(!nav);
  };

  const changeTheme = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${toggle ? "w-full" : "w-full text-black"} h-screen`}>
      <div
        className={
          toggle
            ? "bg-[#161616] shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-30"
            : "bg-[#efefef] text-black shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-30"
        }
      >
        <div className="items-center flex space-x-6">
          <FaBars size={20} onClick={() => handleMenu()} />
          <h1 className="text-xl">KungsApp</h1>
        </div>
        <FaSearch size={20} />
      </div>

      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />
      <DisplayChat />

      <div
        onClick={() => handleMenu()}
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen ease-linear duration-500 bg-black/50 z-40"
            : "ease-linear duration-500 fixed h-screen z-40"
        }
      ></div>
      <div
        className={
          nav
            ? `fixed top-0 left-0 w-[70%] sm:w-[55%] md:w-[40%] h-screen z-50 ${
                toggle ? "bg-[#181818]" : "bg-[#efefef]"
              } ease-linear duration-500`
            : `fixed top-0 left-[-100%] w-[70%] sm:w-[55%] md:w-[40%] h-screen z-50 ease-linear duration-500`
        }
      >
        <SideMenu toggle={toggle} theme={() => changeTheme()} />
      </div>
    </div>
  );
};

export default Conversation;
