import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

function useGetJobs() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["published-jobs"],
    queryFn: async () => {
      const res = await axiosInstance.get("/public/job_posts/published");
      console.log(res);
      return res.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { isLoading, data, error };
}

export default useGetJobs;
