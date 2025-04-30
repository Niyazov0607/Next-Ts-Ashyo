"use client";
import { instance } from "@/hooks/instance";
import { CardType } from "@/types/CardsType";
import { useQuery } from "@tanstack/react-query";

export const getCards = () => {
    const { data, isLoading, isError } = useQuery<CardType[]>({
        queryKey: ["products"],
        queryFn: () =>
            instance()
                .get("/products")
                .then((res) => res.data.items),
    });

    return { data, isLoading, isError };
};
