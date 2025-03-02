import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HistoryEgypt = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-10 container mx-auto mb-16 mt-50">
      <div className="order-last md:order-first col-span-1">
        <hr className="text-yellow-400 w-24" />
        <h3 className="text-base font-semibold uppercase my-4 text-gray-400">
          About Us
        </h3>
        <h1 className="text-7xl font-semibold mb-10 text-gray-800">
          History of Egypt
        </h1>
        <p className="text-4xl font-semibold my-5 text-gray-600">
          The World,s Leading Museum of Histrory & Culture.
        </p>
        <p className="text-bg font-normal text-gray-500 my-4">
          Egypt is the world,s leading museum of history & culture, housing a
          permanent collection of over 2.3 million objects that span over 5,000
          years of human creativity.
        </p>
        <p className="text-bg font-normal text-gray-500 my-4">
          Desires to obtain pain of itself, because it is pain, but because
          occa- sionally circumstances occur some great pleasure.
        </p>
        <button className="btn my-6 italic text-base font-semibold text-amber-400 flex items-center w-40 gap-4">
          More Details <FaArrowRight />
        </button>
      </div>
      <motion.div
        className="order-last md:order-first col-span-1"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-yellow-500 w-[400px] h-[350px] mx-auto flex relative">
          <div className="absolute -top-10 -left-[82px]">
            <img src="https://i.ibb.co.com/F45smnrn/about2.jpg" alt="" />
          </div>
          <div className="absolute -top-32 -right-[58px] border-2 border-gray-200 w-[370px] h-[350px]">
            <h2 className="text-6xl mr-6 mt-3 font-semibold flex justify-end items-center text-yellow-600 gap-2">
              E{" "}
              <div className="flex flex-col items-center">
                <span className="text-lg">stablished</span>
                <span className="text-lg">1955</span>
              </div>
            </h2>
          </div>
          <div className="absolute -bottom-10 -right-[82px]">
            <img src="https://i.ibb.co.com/BKgKBb7v/about1.jpg" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HistoryEgypt;
