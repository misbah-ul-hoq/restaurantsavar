import { useState } from "react";
import useMenu from "../../hooks/useMenu";

const tabs = ["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"];
const OrderTab = () => {
  const { menu } = useMenu();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section className="tabs-wrapper container-center">
      <div className="tabs-header mx-auto mb-10 flex max-w-[680px] justify-center space-x-8">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer py-2 font-medium ${
              activeTab === tab
                ? "border-b-4 border-yellow-600 text-yellow-600"
                : "text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderTab;
