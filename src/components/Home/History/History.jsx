import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import img from "../../../assets/muesem-1.png";

const History = () => {
  const dataInfo = [
    {
      id: "1",
      title: "HISTORY OF OUR MUSEUM",
      description:
        "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.",
      img,
      btn: "More Info",
      icon: FaArrowRight,
      subTitle: "Museum Open",
      subDescription: "We are Open all day",
    },
    {
      id: "2",
      subTitle: "Events Management",
      subDescription: "We are Open all day",
    },
    {
      id: "3",
      subTitle: "Exhibition Open",
      subDescription: "We are Open all day",
    },
  ];

  return (
    <div className="my-20 container mx-auto">
      <div>
        {dataInfo.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            {item.title && (
              <div className="col-span-1 text-center items-center p-6 my-auto md:order-last order-first">
                <h3 className="text-lg my-2 font-semibold text-amber-400">
                  {item.title}
                </h3>
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <hr className="w-96 my-10 mx-auto border-amber-400" />
                <p className="my-4 leading-7 text-neutral-500">
                  {item.description}
                </p>
                {item.btn && (
                  <div className="sm:flex sm:justify-center">
                    <button className="btn my-6 italic text-base font-semibold text-amber-400 flex items-center w-40 gap-4">
                      {item.btn} {item.icon && <item.icon />}
                    </button>
                  </div>
                )}
              </div>
            )}

            {item.img && (
              <motion.div
                className="col-span-1 md:order-first order-last"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt="Museum"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bg-yellow-500 p-6 flex flex-wrap justify-between">
        {dataInfo.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 text-center p-8 border border-white"
          >
            <h2 className="text-base font-semibold text-black uppercase">
              {item.subTitle}
            </h2>
            <p className="text-2xl font-semibold text-white">
              {item.subDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
