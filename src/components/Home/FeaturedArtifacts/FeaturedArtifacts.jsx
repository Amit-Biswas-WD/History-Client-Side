import { useState, useEffect } from "react";
import FeaturedArtifact from "./FeaturedArtifact";

const FeaturedArtifacts = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);
  console.log(history);

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
        {history.slice(0, 6).map((artifact, index) => (
          <FeaturedArtifact key={index} artifact={artifact}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
