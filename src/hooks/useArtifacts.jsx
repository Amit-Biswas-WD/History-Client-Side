import { useEffect, useState } from "react";

const useArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {}, []);
  
  return [artifacts];
};

export default useArtifacts;
