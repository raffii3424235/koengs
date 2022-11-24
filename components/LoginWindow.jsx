import { FaGoogle, FaFacebook, FaApple, FaPhoneAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const LoginWindow = ({ close }) => {
  return (
    <div className="absolute w-full right-2/4 bottom-2/4 translate-x-2/4 z-50 translate-y-2/4 px-8 md:px-56 lg:px-96">
      <div className="bg-white rounded-xl drop-shadow-lg">
        <div onClick={close} className="pt-2 mx-2 float-right">
          <CgClose
            className="border rounded-full py-1 px-1 cursor-pointer"
            size={24}
          />
        </div>
        <div className="py-8 justify-center px-10">
          <h2 className="text-base text-center font-semibold">
            Choose your login option
          </h2>
          <div className="pt-6 space-y-4">
            <Link href="/chatting-app/conversation">
              <div className="bg-slate-100 py-2 flex items-center justify-center space-x-1 rounded-sm px-3 outline outline-1 outline-gray-200">
                <FaGoogle size={16} />
                <p className="text-xs font-medium">Continue with Google</p>
              </div>
            </Link>
            <div className="bg-slate-100 py-2 flex items-center justify-center space-x-1 rounded-sm px-3 outline outline-1 outline-gray-200">
              <FaFacebook size={16} />
              <p className="text-xs font-medium">Continue with Facebook</p>
            </div>
            <div className="bg-slate-100 py-2 flex items-center justify-center space-x-1 rounded-sm px-3 outline outline-1 outline-gray-200">
              <FaApple size={16} />
              <p className="text-xs font-medium">Continue with Apple</p>
            </div>
            <div className="bg-slate-100 py-2 flex items-center justify-center space-x-1 rounded-sm px-3 outline outline-1 outline-gray-200">
              <FaPhoneAlt size={14} />
              <p className="text-xs font-medium">Continue with Phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWindow;
