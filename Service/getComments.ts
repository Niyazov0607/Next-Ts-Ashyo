"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getComments = (id: string | number) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["comments", id],
        queryFn: () =>
            instance()
                .get(`/comment/${id}`)
                .then((res) => res.data),
    });

    return { data, isLoading, isError };
};
