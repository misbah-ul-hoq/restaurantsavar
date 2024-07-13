const Menu = ({ menuItem }) => {
  const { name, image, recipe, price } = menuItem;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-7">
        <img
          src={image}
          className="h-[104px] w-[118px] rounded-b-full rounded-tr-full"
          alt={name}
        />
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl">{name} ------</h3>
            <p className="text-lg font-bold text-yellow-600">${price}</p>
          </div>
          <p className="mt-2">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
