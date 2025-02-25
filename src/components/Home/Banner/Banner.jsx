import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../assets/banner/image-1.jpg";
import image2 from "../../../assets/banner/image-2.jpg";
import image3 from "../../../assets/banner/image-3.jpg";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: image1,
      title: "100+ Arts in One place",
      description: "What is text to image in AI? Text to image is a type of generative AI technology that lets you create images with nothing more than a few words.",
      btn: "Explore",
    },
    {
      id: 2,
      img: image2,
      title: "20+ Arts in One place",
      description: "Fauvism, Cubism, Futurism, Dada, Surrealism, Abstract Expressionism, Pop Art, Minimalism, Conceptual Art, Photorealism, and Neo-Expressionism.",
      btn: "Explore",
    },
    {
      id: 3,
      img: image3,
      title: "90+ Arts in One place",
      description: "Balgin. The Balgin font, a '90s classic, evokes nostalgia with its bold swirls and elegant lines that captivate viewers.",
      btn: "Explore",
    },
  ];

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h2 className="text-gray-100 text-6xl font-bold my-4">{slide.title}</h2>
              <p className="text-gray-100 text-xl font-normal w-[580px]">{slide.description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
                {slide.btn}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
