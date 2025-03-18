import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "./../../hooks/useAuth";

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuth();
  const email = user?.email || "";

  const {
    name,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    photo,
    location,
    discovered,
  } = artifact;

  const [valueInfo, setValueInfo] = useState({
    photo,
    name,
    createdAt,
    discoveredAt,
    artifactType,
    historicalContext,
    location,
    email: email,
    discovered,
  });

  const handleLike = (event) => {
    event.preventDefault();
    console.log(valueInfo);
    fetch("http://localhost:5000/like", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(valueInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Your like has been recorded successfully!");
          setIsLiked(true);
        }
      });
  };

  return (
    <div className="container mx-auto mt-30 mb-10 flex justify-between gap-20 border-gray-400 bg-amber-50 shadow-2xl p-4 rounded-xl">
      <form
        onSubmit={handleLike}
        className="w-full flex flex-col gap-6 md:flex-row"
      >
        <div className="w-full md:w-[48%] mb-4 md:mb-0">
          <img
            className="w-full h-[400px] object-cover"
            src={photo}
            alt="Image not found"
          />
        </div>

        <div className="w-full md:w-[48%] pl-0 md:pl-4">
          <h2 className="text-3xl font-semibold mb-4">Name: {name}</h2>
          <div className="text-lg font-medium space-y-2">
            <p>
              Created At: <span className="font-normal">{createdAt}</span>
            </p>
            <p>
              Discovered At: <span className="font-normal">{discoveredAt}</span>
            </p>
            <p>
              Artifact Type: <span className="font-normal">{artifactType}</span>
            </p>
            <p>
              Historical Context:{" "}
              <span className="font-normal">{historicalContext}</span>
            </p>
            <p>
              Location: <span className="font-normal">{location}</span>
            </p>
            <p>
              Discovered: <span className="font-normal">{discovered}</span>
            </p>
          </div>

          <div className="text-end mt-4">
            <button
              type="submit"
              className="btn bg-amber-400 hover:text-amber-400 hover:bg-white hover:border-amber-400"
              disabled={isLiked}
            >
              {isLiked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ArtifactDetails;
