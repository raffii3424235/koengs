import { useState } from "react";
import LoginWindow from "../../components/LoginWindow";

const Login = () => {
  const [open, setOpen] = useState(false);

  const newWindowLogin = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-screen grid grid-rows-2 bg-smoothly-move text-black overflow-hidden">
      <div className="row-span-2"></div>
      <div className="bg-slate-50 rounded-t-3xl bottom-0`">
        <div className="text-center mt-10 mx-6">
          <h1 className="text-xl leading-tight">
            Enjoy the new experience of chatting with global friend
          </h1>
          <p className="text-sm py-2 text-gray-400">
            Connect people arround the word for free
          </p>
          <button
            onClick={() => newWindowLogin()}
            className="mt-6 bg-[#6b1cb6] py-4 px-24 rounded-lg text-sm text-white font-semibold"
          >
            Get Started
          </button>
        </div>
        <div
          className={
            open
              ? "ease-linear duration-500"
              : "hidden translate-x-full translate-y-full ease-linear duration-500"
          }
        >
          <div
            onClick={() => setOpen(false)}
            className={
              open
                ? "fixed left-0 top-0 w-full h-screen ease-linear duration-500 bg-black/50"
                : "ease-linear duration-500 hidden fixed h-screen"
            }
          ></div>
          <LoginWindow close={() => setOpen(false)} />
        </div>
        <footer className="items-center py-5 text-center left-0 right-0">
          <p className="mt-10 text-xs font-medium">
            Powered by <span className="font-bold text-base">kungs</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
