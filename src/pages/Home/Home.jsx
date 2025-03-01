import Banner from "../../components/Home/Banner/Banner";
import Gallery from "../../components/Home/Gallery";
import HistoryEgypt from "../../components/Home/HistoryEgypt/HistoryEgypt";
import History from "./../../components/Home/History/History";

const Home = () => {
  return (
    <div>
      <Banner />
      <History />
      <HistoryEgypt/>
      <Gallery />
    </div>
  );
};

export default Home;
