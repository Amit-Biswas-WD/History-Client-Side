import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-black/90 text-white">
      <div className="container mx-auto grid grid-cols-4 gap-14 py-10">
        <div className="col-span-1 text-gray-200">
          <h2 className="text-2xl font-bold my-3 uppercase"><span className="text-yellow-500">His</span> tory</h2>
          <div className="my-4">
            <p className="text-lg font-normal">
              Then one day he was shooting at some food and up through through
              the ground came a crude oil day he was shooting at some food.
            </p>
          </div>
          <div className="flex gap-4 items-center my-4">
            <div className="bg-black/90 p-4 rounded-full hover:text-black/95 hover:bg-amber-400 duration-600">
              <FaFacebookF />
            </div>
            <div className="bg-black/90 p-4 rounded-full hover:text-black/95 hover:bg-amber-400 duration-600">
              <FaTwitter />
            </div>
            <div className="bg-black/90 p-4 rounded-full hover:text-black/95 hover:bg-amber-400 duration-600">
              <FaInstagram />
            </div>
            <div className="bg-black/90 p-4 rounded-full hover:text-black/95 hover:bg-amber-400 duration-600">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold my-3">INFORMATION</h3>
          <div className="flex gap-1">
            <hr className="text-yellow-400 w-24" />
            <hr className="text-white w-2" />
          </div>
          <div className="my-2 flex gap-12">
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
          <h3 className="text-lg font-semibold my-3">RESORUCES</h3>
          <div className="flex gap-1">
            <hr className="text-yellow-400 w-24" />
            <hr className="text-white w-2" />
          </div>
          <div className="my-2">
            <p className="text-lg font-normal my-2">Terms are Use</p>
            <p className="text-lg font-normal my-2">Privacy Policy</p>
            <p className="text-lg font-normal my-2">Sitemaps</p>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-semibold my-3">NEWSLETTER</h3>
          <div className="flex gap-1">
            <hr className="text-yellow-400 w-24" />
            <hr className="text-white w-2" />
          </div>
          <div className="flex flex-col gap-4 my-2">
            <input
              type="text"
              placeholder="Your Email ID"
              className="input border-black bg-black my-2"
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
