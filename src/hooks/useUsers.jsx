import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../api/useAxiosSecure";

const useUsers = () => {
  const { axiosSecure } = useAxiosSecure();
  const {
    isPending,
    error,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });
  return { users, isPending, error, refetch };
};

export default useUsers;
