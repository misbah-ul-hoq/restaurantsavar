import Menu from "../shared/Menu";

const MenuCategory = ({ items }) => {
  return (
    <div className="menus-wrapper container-center grid gap-8 md:grid-cols-2">
      {items.map((item) => (
        <Menu key={item._id} menuItem={item} />
      ))}
    </div>
  );
};

export default MenuCategory;
