const Footer = () => {
  return (
    <div className="bg-black/95 text-white">
      <div className="container mx-auto grid grid-cols-4 gap-4 items-center py-10">
        <div className="col-span-1">
          <img src="https://i.ibb.co.com/7x6HHrm4/Screenshot-8.png" alt="" />
        </div>
        <div className="col-span-1">
          <h3 className="text-base font-semibold">INFORMATION</h3>
        </div>
        <div className="col-span-1">
          <h3 className="text-base font-semibold">RESORUCES</h3>
        </div>
        <div className="col-span-1">
          <h3 className="text-base font-semibold">NEWSLETTER</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
