import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

function Services() {
  return (
    <div className="flex flex-row justify-between items-center w-3/5 h-56 mt-8">
      <div className="w-1/3 bg-gray-200 h-60 m-2 p-4 flex flex-col justify-center items-center rounded-xl">
        <div className="bg-white rounded-full p-2">
          <CiDeliveryTruck />
        </div>
        <span className="mt-4 text-xs text-black-700">
          Super Fast and Free Delivery
        </span>
      </div>
      <div className="flex flex-col w-1/3">
        <div className="flex flex-col h-28 m-2 bg-gray-200 h-full p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <MdOutlineSecurity />
          </div>
          <span className="mt-4 text-xs text-black-700">
            Non-contact Shipping
          </span>
        </div>
        <div className="flex flex-col h-28 m-2 bg-gray-200 h-full p-4 flex flex-col justify-center items-center rounded-xl">
          <div className="bg-white rounded-full p-2">
            <GiReceiveMoney />
          </div>
          <span className="mt-4 text-xs text-black-700">
            Money-back Guaranteed
          </span>
        </div>
      </div>
      <div className="w-1/3 h-60 m-2 bg-gray-200 p-4 flex flex-col justify-center items-center rounded-xl">
        <div className="bg-white rounded-full p-2">
          <RiSecurePaymentFill />
        </div>
        <span className="mt-4 text-xs text-black-700">
          Super Secure Payment System
        </span>
      </div>
    </div>
  );
}

export default Services;
