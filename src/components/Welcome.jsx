import React from "react";

function Welcome({ name }) {
  return (
    <div className="bg-gray-300 w-1/2 m-8 p-4 h-3/5 m-auto rounded-xl border-2 border-black flex flex-col justify-between">
      <div className="flex flex-col">
        <p className="text-gray-800 p-px">Welcome to</p>
        <h1 className="font-bold text-5xl text-purple-500 pb-2">JB {name}</h1>
      </div>
      <div className=" flex flex-row">
        <p className="w-1/2 text-justify mr-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nam.
          Quis ex voluptas nobis voluptate. Impedit, fugiat alias ipsam sed
          aliquid libero nam enim deleniti deserunt placeat maxime dignissimos
          doloremque.
        </p>
        <img
          className="w-1/2 h-full p-2"
          src="https://bestmediainfo.com/uploads/2022/07/1658720629.Lifestyle-main-image.jpg"
          alt="family-shopping"
        />
      </div>
      <div className="my-auto pl-1">
        <button className="bg-purple-500 p-2 text-white text-xl font-bold rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Welcome;
