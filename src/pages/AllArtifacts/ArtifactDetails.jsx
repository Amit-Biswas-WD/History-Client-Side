import { useLoaderData } from "react-router-dom";

const ArtifactDetails = () => {
  const artifact = useLoaderData([]);
  const {
    _id,
    name,
    email,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    photo,
    location,
    discovered,
  } = artifact;
  return (
    <div className="container mx-auto mt-30 mb-10 flex justify-between gap-10 w-full border-gray-400 shadow-2xl">
      <div className="w-[48%]">
        <img className="w-full h-[400px]" src={photo} alt="Image not found" />
      </div>
      <div className="my-4 w-[48%] pr-4">
        <h2 className="text-3xl font-semibold">Name: {name}</h2>
        <div className="text-lg font-medium my-2">
          <p className="my-2">
            Created At: <span className="font-normal">{createdAt}</span>
          </p>
          <p>
            Discovered At: <span className="font-normal"> {discoveredAt}</span>
          </p>
          <p className="my-2">
            Artifact Type: <span className="font-normal">{artifactType}</span>
          </p>
          <p>
            Historical Context:{" "}
            <span className="font-normal"> {historicalContext}</span>
          </p>
          <p className="my-2">
            Location: <span className="font-normal"> {location}</span>
          </p>
        </div>
        <div>
          <p className="text-lg font-medium">
            Discovered: <span className="font-normal"> {discovered}</span>
          </p>
          <div className="text-end pr-4">
            <button>Like: 100</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
