import img1 from "../../assets/1.jpg"
import img5 from "../../assets/5.jpg"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.jpg"
import img8 from "../../assets/8.jpg"
import img11 from "../../assets/11.png"

const Gallery = () => {
  return (
    <div className="h-full">
      <div className="grid grid-cols-4  h-[50%]">
        <div className="col-span-2">
          <img
            className="w-full h-full bg-cover"
            src={img6}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="w-full h-full bg-cover"
            src={img5}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="w-full h-full bg-cover"
            src={img7}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4  h-[50%]">
        <div className="col-span-1">
          <img
            className="w-full h-full bg-cover"
            src={img1}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="w-full h-full bg-cover"
            src={img8}
            alt=""
          />
        </div>
        <div className="col-span-2">
          <img
            className="w-full h-full bg-cover"
            src={img11}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
