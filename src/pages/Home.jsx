import Banner from "../components/Home/Banner";
import MenuWrapper from "../components/Home/MenuWrapper";
import Sliders from "../components/Home/Sliders";

const Home = () => {
  return (
    <section className="mb-10 space-y-10 lg:space-y-20">
      <Banner />
      <Sliders />
      <MenuWrapper />
    </section>
  );
};

export default Home;
