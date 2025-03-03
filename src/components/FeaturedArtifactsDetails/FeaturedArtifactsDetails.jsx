import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

const FeaturedArtifactsDetails = () => {
  const data = useLoaderData();

  const { artifact_image, artifact_name, short_description, like_count } = data;
  return (
    <div className="mt-20 container mx-auto">
      <h2 className="text-2xl font-semibold">
        FeaturedArtifactsDetails: {data.artifact_name}
      </h2>
      <div className="border border-gray-500 rounded-lg shadow-2xl p-4 my-8">
        <img
          src={artifact_image}
          alt={artifact_name}
          className="w-full h-80 object-cover bg-cover rounded-lg"
        />
        <div className="my-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Title: {artifact_name}
          </h2>
          <p className="text-base font-normal my-2 text-gray-500">
            {short_description}
          </p>
          <div className="flex justify-between items-center my-4 text-gray-600">
            <p className="text-base font-normal flex items-center gap-1">
              <FcLike className="w-6 h-6" />
              <span className="ml-1">{like_count || 0}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifactsDetails;
