import { useQuery, useQueryClient } from "@tanstack/react-query"
import axiosService from "./axiosService"

export default function useGetSlider() {
    const { data, isLoading, error } = useQuery({
        queryKey: "slider",
        queryFn: async () => {
const res = await axiosService.get("/")
        }
    })
    return { data, isLoading, error }
}


