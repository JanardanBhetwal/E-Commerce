import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-2 top text-md font-bold text-white">
      <ul className="flex flex-row justify-between">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
