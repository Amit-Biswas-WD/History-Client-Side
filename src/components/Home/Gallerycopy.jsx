const images = [
  {
    "id": 1,
    "src": "https://i.ibb.co.com/MykGLdxr/6.png",
    "alt": "Image 1"
  },
  {
    "id": 2,
    "src": "https://i.ibb.co.com/MyWLWhff/5.jpg",
    "alt": "Image 2"
  },
  {
    "id": 3,
    "src": "https://i.ibb.co.com/PGpx9L5p/10.jpg",
    "alt": "Image 3"
  },
  {
    "id": 4,
    "src": "https://i.ibb.co.com/Vccrsqb9/7.jpg",
    "alt": "Image 4"
  },
  {
    "id": 5,
    "src": "https://i.ibb.co.com/XrPHSWRT/8.jpg",
    "alt": "Image 5"
  },
  {
    "id": 6,
    "src": "https://i.ibb.co.com/m5M3xTBx/hdfsgh.png",
    "alt": "Image 6"
  }
];


const GalleryCopy = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className={image.id % 2 === 1 ? "col-start-1" : "col-start-2"}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryCopy;



