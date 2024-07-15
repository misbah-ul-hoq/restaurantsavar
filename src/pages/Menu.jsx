import FeatureBanner from "../components/shared/FeatureBanner";
import banner from "../assets/menu/banner3.jpg";
const MenuPage = () => {
  return (
    <div>
      <FeatureBanner
        title="our menu"
        description="Would you like to try a dish?"
        bgImg={banner}
        bgProps="bg-black bg-opacity-50 text-white"
      />
    </div>
  );
};

export default MenuPage;
