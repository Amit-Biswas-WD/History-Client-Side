import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Like = () => {
  const { user } = useAuth();
  const [addData, setAddData] = useState([]);
  const axiosInstance = useAxiosSecure();

  const url = `/like?email=${user?.email}`;

  useEffect(() => {
    axiosInstance.get(url).then((res) => {
      console.log(res.data);
      setAddData(res.data);
    });
  }, [url, axiosInstance]);

  return (
    <div className="container mx-auto mt-30 mb-10 grid md:grid-cols-2 sm:grid-cols-1 gap-8">
      {addData.map((data) => (
        <div
          key={data._id}
          className="col-span-1 border border-gray-300 shadow-2xl rounded-lg p-8"
        >
          <img src={data.photo} alt="Image not found" className="w-full h-[400px]" />
          <h2 className="text-3xl font-semibold mb-4 mt-8">Name: {data.name}</h2>
          <div className="text-lg font-medium space-y-2">
            <p>
              Created At: <span className="font-normal">{data.createdAt}</span>
            </p>
            <p>
              Discovered At: <span className="font-normal">{data.discoveredAt}</span>
            </p>
            <p>
              Artifact Type: <span className="font-normal">{data.artifactType}</span>
            </p>
            <p>
              Historical Context:{" "}
              <span className="font-normal">{data.historicalContext}</span>
            </p>
            <p>
              Location: <span className="font-normal">{data.location}</span>
            </p>
            <p>
              Discovered: <span className="font-normal">{data.discovered}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Like;
