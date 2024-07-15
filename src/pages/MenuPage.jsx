import FeatureBanner from "../components/shared/FeatureBanner";
import banner from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/Home/SectionTitle";
import MenuCategory from "../components/Menu/MenuCategory";

const MenuPage = () => {
  useDocumentTitle("Menu | Restaurant");
  const { menu } = useMenu();
  const offered = menu.filter((item) => item.category == "offered");
  const desserts = menu.filter((item) => item.category == "dessert");
  const pizzas = menu.filter((item) => item.category == "pizza");
  const salads = menu.filter((item) => item.category == "salad");
  const soups = menu.filter((item) => item.category == "soup");

  return (
    <section className="menu-page-wrapper mb-10 space-y-14 lg:space-y-20">
      <FeatureBanner
        title="our menu"
        description="Would you like to try a dish?"
        bgImg={banner}
        bgProps="bg-black bg-opacity-50 text-white"
      />
      <div>
        <SectionTitle subHeading="Don't miss" heading="today's offer" />
        <MenuCategory items={offered} />
      </div>

      <FeatureBanner
        title="Desserts"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImg={dessertImg}
        bgProps="bg-black bg-opacity-60 text-white"
      />

      <MenuCategory items={desserts} />

      <FeatureBanner
        title="Pizza"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImg={pizzaImg}
        bgProps="bg-black bg-opacity-60 text-white"
      />

      <MenuCategory items={pizzas} />

      <FeatureBanner
        title="Pizza"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImg={pizzaImg}
        bgProps="bg-black bg-opacity-60 text-white"
      />

      <MenuCategory items={salads} />

      <FeatureBanner
        title="Salads"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImg={saladImg}
        bgProps="bg-black bg-opacity-60 text-white"
      />

      <MenuCategory items={soups} />
    </section>
  );
};

export default MenuPage;
