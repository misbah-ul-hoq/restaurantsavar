import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

const useCart = () => {
  const {
    isPending,
    error,
    data: cart = [],
  } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const result = await api.get("/carts");
      return result.data;
    },
  });
  return { cart, isPending, error };
};

export default useCart;
