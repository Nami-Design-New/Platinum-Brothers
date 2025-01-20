import { useQuery } from "@tanstack/react-query";
import axiosService from "./axiosService";

function useGetHome() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["HomeSec"],
    queryFn: async () => {
      try {
        const response = await axiosService.get("/api/homeSections");
        return response.data?.data; 
      } catch (err) {
        throw new Error("Error fetching home data: " + err);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { isLoading, data, error };
}

export default useGetHome;
