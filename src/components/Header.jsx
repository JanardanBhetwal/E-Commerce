import Navbar from "./Navbar";
import { IoCartOutline } from "react-icons/io5";
import { FaAmazon } from "react-icons/fa";

function Header() {
  return (
    <header className="fixed top-0 bg-gray-700 fixed flex flex-row justify-between w-full items-center h-12 p-2 rounded-md m-px">
      <div className="ml-4">
        <FaAmazon size={36} />
      </div>
      <div className="w-1/2 w-2/5">
        <Navbar />
      </div>
      <div className="mr-4 flex flex-row">
        <IoCartOutline size={36} className="my-auto" />
        <span className="m-auto rounded-full bg-purple-500 text-xs p-1 absolute top-1 right-5 ">
          10
        </span>
      </div>
    </header>
  );
}

export default Header;
