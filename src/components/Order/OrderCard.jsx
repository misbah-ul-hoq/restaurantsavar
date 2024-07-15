const OrderCard = ({ menuItem }) => {
  const { name, image, recipe, price } = menuItem;
  return (
    <div className="m-4 max-w-sm overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src="https://via.placeholder.com/150"
        alt="Caeser Salad"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Caeser Salad</div>
        <p className="text-base text-gray-700">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
      </div>
      <div className="flex items-center justify-between px-6 pb-2 pt-4">
        <span className="text-gray-700">$14.5</span>
        <button className="btn btn-outline hover:btn-primary">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
