import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center p-8 m-4">
      <div className="m-2 font-bold text-8xl text-gray-500">404</div>
      <div className="m-2 text-3xl">OH! U R LOST</div>
      <div className="m-2 text-sm">
        This page you are looking for does not exist. How you got here is a
        mystery. You can go back to the home page by clicking the button below.
      </div>
      <div>
        <button className="p-2 bg-purple-500 text-white m-2">
          <NavLink to="/">Go back to home</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Error;
