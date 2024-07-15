import SectionTitle from "./SectionTitle";
import Menu from "../shared/Menu";
import useMenu from "../../hooks/useMenu";

const MenuWrapper = () => {
  const { menu } = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <section className="menu-section-wrapper container-center">
      <SectionTitle subHeading="Check it out" heading="from our menu" />
      <div className="menus-wrapper grid gap-8 md:grid-cols-2">
        {popularMenu.map((item) => (
          <Menu key={item._id} menuItem={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuWrapper;
