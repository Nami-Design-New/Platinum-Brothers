import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

function useGetJobs({ pageSize = 10, currentPage = 1, filter, sort } = {}) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["published-jobs", pageSize, currentPage, filter, sort],
    queryFn: async () => {
      const config = {
        headers: {
          "X-Request-Page-Size": pageSize.toString(),
          "X-Request-Current-Page": currentPage.toString(),
        }
      };

      if (filter) {
        config.headers["X-Request-Filter"] = JSON.stringify(filter);
      }

      if (sort) {
        config.headers["X-Request-Sort"] = JSON.stringify(sort);
      }

      const res = await axiosInstance.get("/public/job_posts/published", config);
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
