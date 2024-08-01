import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

const useUsers = () => {
  const {
    isPending,
    error,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await api.get("/users");
      return result.data;
    },
  });
  return { users, isPending, error, refetch };
};

export default useUsers;
