"use client";
import { instance } from "@/hooks/instance";
import { CardType } from "@/types/CardsType";
import { useQuery } from "@tanstack/react-query";

export const getVariation = (id: string | number) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["variations", id],
        queryFn: () =>
            instance()
                .get(`/variations/${id}`)
                .then((res) => res.data),
    });

    return { data, isLoading, isError };
};
