import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const axiosInstance = useAxiosSecure();

  useEffect(() => {
    axiosInstance.get(`/artifacts`).then((res) => {
      console.log(res.data);
      setArtifacts(res.data);
    });
  }, [axiosInstance]);

  return (
    <div className="mt-20 container mx-auto">
      <h2 className="text-xl font-semibold">
        AllArtifacts: {artifacts.length}
      </h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
        {artifacts.map((artifact) => {
          const { _id, photo, name, artifactType, historicalContext } =
            artifact;
          return (
            <div
              key={artifact._id}
              className="border-gray-600 bg-gray-100 rounded-lg shadow-2xl p-4"
            >
              <Link to={`/artifactDetails/${_id}`}>
                <img
                  className="w-full bg-cover h-[350px]"
                  src={photo}
                  alt="Image not found"
                />
              </Link>
              <div className="flex justify-between my-3">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="text-lg font-normal">Like: 100</p>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <p>
                  Artifact Type:{" "}
                  <span className="font-normal">{artifactType}</span>
                </p>
                <p>
                  Historical Context:{" "}
                  <span className="font-normal"> {historicalContext}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllArtifacts;
