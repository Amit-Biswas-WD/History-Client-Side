import image from "../../../assets/banner/image-1.jpg";
import { FcLike } from "react-icons/fc";

const FeaturedArtifacts = () => {
  return (
    <div className="my-20 container mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-gray-700 my-8">
          Featured Artifacts
        </h2>
        <p className="text-base font-normal w-[900px] mx-auto text-gray-700 my-6">
          An artifact is a physical object produced at some time in the past,
          and attesting to a given set of practices, thinking, and ways of
          viewing the world, and whose importance will be defined by present and
          future needs and use.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div className="col-span-1 border border-gray-500 rounded-lg shadow-2xl p-4">
          <img src={image} alt="" />
          <div className="my-4">
            <h2 className="text-2xl font-semibold text-gray-700">
              Title: History
            </h2>
            <p className="text-base font-normal my-2 text-gray-500">
              Short description An artifact is a physical object produced at
              some time in the past, and attesting to a given set of practices,
              thinking
            </p>
            <div className="flex justify-between items-center my-4 text-gray-600">
              <p className="text-base font-normal flex items-center gap-1">
                <FcLike className="w-6 h-6" />: <span className="ml-1">14</span>
              </p>
              <button className="btn btn-dash border-green-500">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 border border-blue-400 rounded-lg shadow-2xl p-4">
          <img src={image} alt="" />
          <div className="my-4">
            <h2 className="text-2xl font-semibold text-gray-700">
              Title: History
            </h2>
            <p className="text-base font-normal my-2 text-gray-500">
              Short description An artifact is a physical object produced at
              some time in the past, and attesting to a given set of practices,
              thinking
            </p>
            <div className="flex justify-between items-center my-4 text-gray-600">
              <p className="text-base font-normal">Like: 14</p>
              <button className="btn btn-dash">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
