import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMenu(data);
      });
  }, []);
  return { menu, loading };
};

export default useMenu;
