import Image from "next/image";
const logo = require("../../public/logo.png");

const Login = () => {
  return (
    <div className="w-ful h-screen text-black overflow-hidden">
      <div className="flex justify-center bg-smoothly-move h-3/5">
        {/* <div className="py-8 grid grid-cols-2 items-center">
          <div className="bg-[#421072] rounded-full rounded-bl-none h-[150px] w-[150px] mx-3 my-3"></div>
          <div className="bg-[#6b1cb6] rounded-full h-[150px] w-[150px] mx-3 my-3"></div>
          <div className="bg-[#6b1cb6] rounded-full h-[150px] w-[150px] mx-3 my-3"></div>
          <div className="bg-[#421072] rounded-full rounded-br-none h-[150px] w-[150px] mx-3 my-3"></div>
        </div> */}
        {/* <div className="py-12">
          <Image className="" src={logo} width={300} height={300} alt="logo" />
        </div> */}
      </div>
      <div className="bg-slate-50 rounded-t-3xl h-screen">
        <div className="text-center pt-8 px-12">
          <h1 className="text-xl leading-tight">
            Enjoy the new experience of chatting with global friend
          </h1>
          <p className="text-sm py-2 text-gray-400">
            Connect people arround the word for free
          </p>
          <button className="mt-6 bg-[#6b1cb6] py-4 px-16 rounded-lg text-sm text-white font-semibold">
            Get Started
          </button>
        </div>
        <footer className="items-center py-5 text-center fixed bottom-0 left-0 right-0">
          <p className="mt-10 text-xs font-medium">
            Powered by <span className="font-bold text-base">kungs</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
