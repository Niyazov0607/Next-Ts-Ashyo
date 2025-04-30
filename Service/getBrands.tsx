"use client";
import { instance } from "@/hooks/instance";
import { BrandsType } from "@/types/BrandsType";
import { useQuery } from "@tanstack/react-query";

export const getBrands = () => {
    const extra = {
        id: 10,
        name: "Ko'proq",
        image: null,
        createdAt: "2025-04-26T11:10:08.217Z",
        updatedAt: "2025-04-26T11:10:08.217Z",
    };
    const { data, isLoading, isError } = useQuery<BrandsType[]>({
        queryKey: ["brands"],
        queryFn: () =>
            instance()
                .get("/brands/all")
                .then((res) => [...res.data, extra]),
    });

    return { data, isLoading, isError };
};
