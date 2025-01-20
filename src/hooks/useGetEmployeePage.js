import { useQuery } from "@tanstack/react-query";
import axiosService from "./axiosService";

function useGetEmployee() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["EmployeePage"],
    queryFn: async () => {
      try {
        const response = await axiosService.get("/api/employee-page");
        return response.data?.data; 
      } catch (err) {
        throw new Error("Error fetching employee data: " + err);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { isLoading, data, error };
}

export default useGetEmployee;
