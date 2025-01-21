import { useQuery } from "@tanstack/react-query";
import axiosService from "./axiosService";

function useGetOffices() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["offices"],
    queryFn: async () => {
      try {
        const response = await axiosService.get("/api/offices");
        return response.data?.data;
      } catch (err) {
        throw new Error("Error fetching offices: " + err);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { isLoading, data, error };
}

export default useGetOffices;
