import Banner from "../../components/Home/Banner/Banner";
import Gallery from "../../components/Home/Gallery";
import GalleryCopy from "../../components/Home/Gallerycopy";
import History from './../../components/Home/History/History';

const Home = () => {
  return (
    <div>
      <Banner/>
      <History />
      <Gallery />
      <GalleryCopy />
    </div>
  );
};

export default Home;
