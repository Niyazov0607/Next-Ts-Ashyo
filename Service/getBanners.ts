"use client";
import { instance } from "@/hooks/instance";
import { BannersType } from "@/types/BannersType";
import { useQuery } from "@tanstack/react-query";

export const GetBanners = () => {
    const { data, isLoading, isError } = useQuery<BannersType[]>({
        queryKey: ["banners"],
        queryFn: () =>
            instance()
                .get("/banners")
                .then((res) => res.data),
    });

    return { data, isLoading, isError };
};
