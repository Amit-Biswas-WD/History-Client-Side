import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const FeaturedArtifact = ({ artifact }) => {
  const { _id, artifact_image, artifact_name, short_description, like_count } =
    artifact;

  return (
    <div>
      <div className="col-span-1 border border-gray-300 rounded-lg shadow-2xl p-4">
        <img
          src={artifact_image}
          alt={artifact_name}
          className="w-full h-72 object-cover bg-cover rounded-lg"
        />
        <div className="my-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Title: {artifact_name}
          </h2>
          <p className="text-base font-normal my-2 text-gray-500">
            {short_description?.slice(0, 96)}
          </p>
          <div className="flex justify-between items-center my-4 text-gray-600">
            <p className="text-base font-normal flex items-center gap-1">
              <FcLike className="w-6 h-6" />
              <span className="ml-1">{like_count || 0}</span>
            </p>
            <Link to={`/details/${_id}`}>
              <button className="btn btn-dash border-green-500">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifact;
