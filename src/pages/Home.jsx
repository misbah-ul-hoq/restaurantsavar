import Banner from "../components/Home/Banner";
import MenuWrapper from "../components/Home/MenuWrapper";
import Parallax from "../components/Home/Parallax";
import Reviews from "../components/Home/Reviews";
import Sliders from "../components/Home/Sliders";

const Home = () => {
  return (
    <section className="mb-10 space-y-10 lg:space-y-20">
      <Banner />
      <Sliders />
      <MenuWrapper />
      <Parallax />
      <Reviews />
    </section>
  );
};

export default Home;
