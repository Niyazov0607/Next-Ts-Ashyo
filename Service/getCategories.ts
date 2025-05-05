"use client";
import { instance } from "@/hooks/instance";
import { CategoryType } from "@/types/CategoryType";
import { useQuery } from "@tanstack/react-query";

export const getCategories = () => {
    const { data, isLoading, isError } = useQuery<CategoryType[]>({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await instance().get("/categories/all", {
                params: { limit: 1000 },
            });
            return response.data;
        },
    });

    return { data, isLoading, isError };
};
