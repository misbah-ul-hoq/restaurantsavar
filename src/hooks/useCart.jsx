import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const {
    isPending,
    error,
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const result = await api.get("/carts?email=" + user?.email);
      return result.data;
    },
  });
  return { cart, isPending, error, refetch };
};

export default useCart;
