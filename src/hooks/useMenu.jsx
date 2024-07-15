import { useEffect } from "react";
import { useState } from "react";
import api from "../api/api";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api.get("/menu").then((res) => {
      setLoading(false);
      setMenu(res.data);
    });
  }, []);
  return { menu, loading };
};

export default useMenu;
