import Banner from "../../components/Home/Banner/Banner";
import FeaturedArtifacts from "../../components/Home/FeaturedArtifacts/FeaturedArtifacts";
import Gallery from "../../components/Home/Gallery";
import HistoryEgypt from "../../components/Home/HistoryEgypt/HistoryEgypt";
import History from "./../../components/Home/History/History";

const Home = () => {
  return (
    <div>
      <Banner />
      <History />
      <HistoryEgypt/>
      <FeaturedArtifacts/>
      <Gallery />
    </div>
  );
};

export default Home;
