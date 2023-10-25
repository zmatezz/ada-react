import React from "react";

const Card = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center m-[10px] rounded-[10px] w-[200px] p-4 bg-[#a0948b] border-[3px]  border-[#6b5e66] ">
      <p className="leading-50 text-lg h-50 w-full px-7 font-medium font-firaCode">
        {title}
      </p>

      <input
        type="number"
        id="kid"
        value="0"
        className="w-[100px] h-20 border-none bg-[#a0948b] text-[#8B6B52]  font-bold text-4xl rounded-[5px] text-center"
      />
      <div className="flex justify-center">
        <button
          className="py-[5px] px-[10px] text-center m-[15px] items-center justify-center cursor-pointer inline-block border-none no-underline outline-none bg-[#8B6B52] text-[#DB9E69] font-bold h-10
         w-[43px] rounded-md"
        >
          -
        </button>
        <button
          className="py-[5px] px-[10px] text-base m-[15px] items-center justify-center cursor-pointer inline-block border-none no-underline outline-none bg-[#8B6B52] text-[#DB9E69]  font-bold h-10
         w-[43px] rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
