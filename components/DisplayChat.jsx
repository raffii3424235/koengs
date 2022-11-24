import React from "react";

const DisplayChat = () => {
  return (
    <div className="py-4 px-3 flex items-center">
      <div className="w-14 h-14 rounded-full bg-indigo-600"></div>
      <div className="ml-4 space-y-1">
        <h4 className="text-white">Anisa</h4>
        <p className="flex text-xs items-center text-gray-300">
          haii apa kabar?
        </p>
      </div>
    </div>
  );
};

export default DisplayChat;
