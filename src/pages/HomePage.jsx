import Banner from "../components/Home/Banner";
import MenuWrapper from "../components/Home/MenuWrapper";
import Parallax from "../components/Home/Parallax";
import Reviews from "../components/Home/Reviews";
import Sliders from "../components/Home/Sliders";
import FeatureBanner from "../components/shared/FeatureBanner";
import useDocumentTitle from "../hooks/useDocumentTitle";
import img from "../assets/home/chef-service.jpg";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, totam quaerat voluptate vitae obcaecati labore quae magnam. Consequuntur saepe corrupti repudiandae labore odio, perferendis sit eligendi mollitia nihil dicta?";
const HomePage = () => {
  useDocumentTitle("Restaurant | Home");

  return (
    <section className="mb-10 space-y-10 lg:space-y-20">
      <Banner />
      <Sliders />
      <FeatureBanner
        title="best restaurant"
        description={text}
        bgImg={img}
        bgProps="bg-white"
      />
      <MenuWrapper />
      <Parallax />
      <Reviews />
    </section>
  );
};

export default HomePage;
