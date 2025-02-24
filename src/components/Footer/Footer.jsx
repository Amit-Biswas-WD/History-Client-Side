import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black/95 text-white">
      <div className="container mx-auto grid grid-cols-4 gap-14 py-10">
        <div className="col-span-1 text-gray-200">
          <img
            className="w-30 h-auto object-center"
            src="https://i.ibb.co.com/gZWsPKGX/Screenshot-8.png"
            alt=""
          />
          <div className="my-4">
            <p className="text-lg font-normal">
              Then one day he was shooting at some food and up through through
              the ground came a crude oil day he was shooting at some food.
            </p>
          </div>
          <div className="flex gap-4 items-center my-4">
            <div className="bg-black p-4 rounded-full hover:text-black/95 hover:bg-amber-400 transition-transform transform hover:scale-105 duration-600 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-black p-4 rounded-full hover:text-black/95 hover:bg-amber-400 transition-transform transform hover:scale-105 duration-600 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-black p-4 rounded-full hover:text-black/95 hover:bg-amber-400 transition-transform transform hover:scale-105 duration-600 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-black p-4 rounded-full hover:text-black/95 hover:bg-amber-400 transition-transform transform hover:scale-105 duration-600 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold">INFORMATION</h3>
          <div className="my-4 flex gap-12">
            <div>
              <p className="text-lg font-normal my-2">About</p>
              <p className="text-lg font-normal my-2">History</p>
              <p className="text-lg font-normal my-2">Gallery</p>
            </div>
            <div>
              <p className="text-lg font-normal my-2">Services</p>
              <p className="text-lg font-normal my-2">Contact</p>
              <p className="text-lg font-normal my-2">All view</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold">RESORUCES</h3>
          <div className="my-4">
              <p className="text-lg font-normal my-2">Terms are Use</p>
              <p className="text-lg font-normal my-2">Privacy Policy</p>
              <p className="text-lg font-normal my-2">Sitemaps</p>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold">NEWSLETTER</h3>
          <div className="flex flex-col gap-4 my-4">
            <input
              type="text"
              placeholder="Your Email ID"
              className="input border-black bg-black"
            />
            <button className="btn bg-amber-400 hover:text-amber-400 hover:bg-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
