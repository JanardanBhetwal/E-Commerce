import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bottom-0 ">
      <section className="flex flex-row justify-between items-center p-2 rounded-md w-3/5 m-auto my-2 border">
        <div className="flex flex-col p-2 ">
          <p>Ready to get Started?</p>
          <p>Talk to us today.</p>
        </div>
        <div>
          <button className="p-2 bg-purple-500 text-white rounded-sm">
            <NavLink to="contact">Get Started</NavLink>
          </button>
        </div>
      </section>

      <section className="w-full bg-gray-700 py-4">
        <div className="w-4/5 h-36 p-4 m-auto my-1 text-white text-xs flex flex-row justify-evenly">
          <div className="flex w-1/5 flex-col">
            <p className="text-sm"> Janardan Bhetwal</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <form className="flex flex-col">
            <p>Subscribe for important updates</p>
            <input
              action="#"
              type="email"
              placeholder="email"
              className="p-1 h-6 p-px pl-1 m-1 text-black rounded"
            />
            <button
              type="submit"
              className="bg-purple-500 text-sm p-1 w-2/5 rounded mx-auto m-1"
            >
              Subscribe
            </button>
          </form>
          <div>
            <p className="text-center text-sm">Follow Us</p>
            <div className="flex flex-row justify-between">
              <div className=" rounded-full border p-1 m-px border-white">
                <a href="https://discord.com">
                  <FaDiscord size={12} />
                </a>
              </div>
              <div className=" rounded-full border p-1 m-px border-white">
                <a href="https://whatsapp.com">
                  <IoLogoWhatsapp size={12} />
                </a>
              </div>
              <div className=" rounded-full border p-1 m-px border-white">
                <a href="https://instagram.com">
                  <FaInstagramSquare size={12} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm">Call us</p>
            <p>+977 9800000000</p>
          </div>
        </div>

        <div className=" text-sm text-white text-center flex flex-row justify-evenly  p-1 pt-4 border-t border-gray-400">
          <p>@{new Date().getFullYear()} JB. All Rights Reserved</p>
          <div className="flex flex-col">
            <p>Privacy Policy</p>
            <p>Copyrights Reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
