"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

type Category = {
    id: number;
    name: string;
};

export const getCategories = () => {
    const { data, isLoading, isError } = useQuery<Category[]>({
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
