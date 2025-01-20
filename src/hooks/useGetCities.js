import { useQuery } from "@tanstack/react-query";
import axiosService from "./axiosService";

function useGetCities() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      try {
        const response = await axiosService.get("/api/slider-cities");
        return response.data?.data;
      } catch (err) {
        throw new Error("Error fetching cities" + err);
      }
    },

    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { isLoading, data, error };
}

export default useGetCities;
