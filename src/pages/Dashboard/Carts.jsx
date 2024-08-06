import { useEffect, useState } from "react";

const DashboardCarts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://tastyfoods-api.vercel.app/carts?email=extraordinarymisbah@gmail.com",
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return <div>DashboardCarts</div>;
};

export default DashboardCarts;
