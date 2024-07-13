import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Menu from "../shared/Menu";

const MenuWrapper = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredMenu = data.filter((item) => item.category === "popular");
        setMenu(filteredMenu);
      });
  }, []);
  return (
    <section className="menu-section-wrapper container-center">
      <SectionTitle subHeading="Check it out" heading="from our menu" />
      <div className="menus-wrapper grid gap-8 md:grid-cols-2">
        {menu.map((item) => (
          <Menu key={item._id} menuItem={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuWrapper;
