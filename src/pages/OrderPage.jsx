import FeatureBanner from "../components/shared/FeatureBanner";
import shop from "../assets/shop/banner2.jpg";
import OrderTab from "../components/Order/OrderTab";
const OrderPage = () => {
  return (
    <section className="order-page-wrapper space-y-14 lg:space-y-20">
      <FeatureBanner
        title="Order From Us"
        description="Would you like to try a dish? Give it a shot."
        bgImg={shop}
        bgProps="bg-black bg-opacity-50 text-white"
      />
      <OrderTab />
    </section>
  );
};

export default OrderPage;
