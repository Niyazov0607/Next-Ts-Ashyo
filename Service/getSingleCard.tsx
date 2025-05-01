"use client";
import { instance } from "@/hooks/instance";
import { CardType } from "@/types/CardsType";
import { useQuery } from "@tanstack/react-query";

export const getSingleCard = (id: string | number | undefined) => {
    const {
        data = {} as CardType,
        isLoading,
        isError,
    } = useQuery<CardType>({
        queryKey: ["single_card", id],
        queryFn: () =>
            instance()
                .get(`/products/${id}`)
                .then((res) => res.data),
        enabled: !!id,
    });

    return { data, isLoading, isError };
};
