import { IoLogoFacebook } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import { IoLogoChrome } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoWindows } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

function Trusted() {
  return (
    <div className="flex flex-col w-full items-center mt-16">
      <span className="mt-2 text-xs text-black-700">
        Trusted By 1000+ Companies
      </span>

      <div className="flex flex-row justify-between items-center w-4/5 h-24 mt-4">
        <div className="w-1/3 bg-gray-200 h-24 m-2 p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <IoLogoFacebook size={42} />
          </div>
        </div>

        <div className="w-1/3 h-24 m-2 bg-gray-200 p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <IoLogoBuffer size={42} />
          </div>
        </div>

        <div className="w-1/3 h-24 m-2 bg-gray-200 p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <IoLogoChrome size={42} />
          </div>
        </div>

        <div className="w-1/3 h-24 m-2 bg-gray-200 p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <IoLogoWindows size={42} />
          </div>
        </div>

        <div className="w-1/3 h-24 m-2 bg-gray-200 p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <IoLogoPinterest size={42} />
          </div>
        </div>

        <div className="w-1/3 h-24 m-2 bg-gray-200 p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <IoLogoWhatsapp size={42} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
