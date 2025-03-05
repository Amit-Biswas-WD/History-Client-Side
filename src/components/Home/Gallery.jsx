import img1 from "../../assets/1.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img11 from "../../assets/11.png";
import { CiLink } from "react-icons/ci";

const Gallery = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-4  h-[50%]">
        <div className="col-span-2 relative overflow-hidden group">
          <img className="w-full h-full object-cover" src={img6} alt="" />
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-800 text-center mx-auto items-center text-black text-2xl font-bold">
            <div className="flex justify-center text-center items-center">
              <CiLink className="w-20 h-auto font-bold" />
            </div>
            <h2 className="text-4xl font-semibold">This is title 1</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              nobis. 1
            </p>
          </div>
        </div>
        <div className="col-span-1 relative overflow-hidden group">
          <img className="w-full h-full bg-cover" src={img5} alt="" />
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-800 text-center flex justify-center mx-auto items-center text-white text-2xl font-bold">
            <CiLink className="w-20 h-auto font-bold" />
          </div>
        </div>
        <div className="col-span-1 relative overflow-hidden group">
          <img className="w-full h-full bg-cover" src={img7} alt="" />
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-800 text-center flex justify-center mx-auto items-center text-white text-2xl font-bold">
            <CiLink className="w-20 h-auto font-bold" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4  h-[50%]">
        <div className="col-span-1 relative overflow-hidden group">
          <img className="w-full h-full bg-cover" src={img1} alt="" />
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-800 text-center flex justify-center mx-auto items-center text-white text-2xl font-bold">
            <CiLink className="w-20 h-auto font-bold" />
          </div>
        </div>
        <div className="col-span-1 relative overflow-hidden group">
          <img className="w-full h-full bg-cover" src={img8} alt="" />
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-800 text-center flex justify-center mx-auto items-center text-white text-2xl font-bold">
            <CiLink className="w-20 h-auto font-bold" />
          </div>
        </div>
        <div className="col-span-2 relative overflow-hidden group">
          <img className="w-full h-full bg-cover" src={img11} alt="" />
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-70 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-800 text-center flex justify-center mx-auto items-center text-white text-2xl font-bold">
            <CiLink className="w-20 h-auto font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
