import { useState, useEffect } from "react";
import FeaturedArtifact from "./FeaturedArtifact";

const FeaturedArtifacts = () => {
  const [history, setHistory] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("http://localhost:5000/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 6, 12));
  };

  const handleSeeLess = () => {
    setVisibleCount(6);
  };

  return (
    <div className="my-20 container mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-gray-700 my-8">
          Featured Artifacts
        </h2>
        <p className="text-base font-normal md:w-[900px] sm:w-[640px] mx-auto text-gray-700 my-6">
          An artifact is a physical object produced at some time in the past,
          and attesting to a given set of practices, thinking, and ways of
          viewing the world, and whose importance will be defined by present and
          future needs and use.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {history.slice(0, visibleCount).map((artifact, index) => (
          <FeaturedArtifact key={index} artifact={artifact} />
        ))}
      </div>
      <div className="text-center mt-8">
        {history.length > 6 && visibleCount < 12 && (
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 mx-2"
          >
            See More
          </button>
        )}
        {visibleCount > 6 && (
          <button
            onClick={handleSeeLess}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 mx-2"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedArtifacts;