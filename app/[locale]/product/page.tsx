"use client";

import { getCards } from "@/service/getCards";
import { CardType } from "@/types/CardsType";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { CompareIcon } from "@/assets/icons";
import { ShoppingBag } from "lucide-react";
import { IMG_API } from "@/hooks/getEnv";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { getCategories } from "@/service/getCategories";
import { getBrands } from "@/service/getBrands";

function formatNumberWithSpaces(num: number | string): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const Product: FC<{ title: string; api: string }> = ({ title, api }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const categoryIdFromQuery = searchParams.get("category");

    const { data, isLoading, isError } = getCards(api);
    const { data: category } = getCategories();
    const { data: brand } = getBrands();

    const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        categoryIdFromQuery ? Number(categoryIdFromQuery) : null
    );
    const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
    const [filteredData, setFilteredData] = useState<CardType[] | null>(null);

    useEffect(() => {
        if (categoryIdFromQuery) {
            setSelectedCategory(Number(categoryIdFromQuery));
        }
    }, [categoryIdFromQuery]);

    useEffect(() => {
        if (data) {
            const filtered = data.filter((item) => {
                const matchesPrice =
                    item.price >= priceRange[0] && item.price <= priceRange[1];

                const matchesCategory =
                    selectedCategory === null ||
                    Number(item.category_id) === Number(selectedCategory);

                const matchesBrand =
                    selectedBrand === null ||
                    Number(item.brand_id) === Number(selectedBrand);

                return matchesPrice && matchesCategory && matchesBrand;
            });

            setFilteredData(filtered);
        }
    }, [data, priceRange, selectedCategory, selectedBrand]);

    const handleFilter = () => {
        // Filtering already handled by useEffect
    };

    const handleCategoryClick = (id: number) => {
        setSelectedCategory(id);
        const params = new URLSearchParams(searchParams.toString());
        params.set("category", id.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="containers py-10 flex gap-6">
            <div className="hidden lg:block w-[280px] bg-[#EBEFF3] border border-gray-200 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-4">
                    Narx{" "}
                    <span className="text-[14px] font-[400] pl-[5px]">
                        [so‘m]
                    </span>
                </h3>
                <div className="flex items-center justify-between">
                    <p className="text-[12px] text-[#00000066]">From</p>
                    <p className="text-[12px] text-[#00000066]">To</p>
                </div>
                <div className="flex gap-[5px] mb-4">
                    <div className="bg-[#FFFFFF] py-[7px] rounded-[5px] w-[120px] text-center">
                        <span className="text-[14px]">
                            {priceRange[0].toLocaleString("ru-RU")}
                        </span>
                    </div>
                    <div className="bg-[#FFFFFF] py-[7px] rounded-[5px] w-[120px] text-center">
                        <span className="text-[14px]">
                            {priceRange[1].toLocaleString("ru-RU")}
                        </span>
                    </div>
                </div>
                <Slider
                    value={priceRange}
                    onValueChange={(value: number[]) => setPriceRange(value)}
                    min={0}
                    max={100000}
                    step={1000}
                    className="w-full"
                />
                <div className="mt-[25px]">
                    <button
                        onClick={handleFilter}
                        className="bg-[#15509E] text-white py-[6px] px-[16px] rounded-[6px] cursor-pointer"
                    >
                        Filter
                    </button>
                </div>

                <h2 className="mt-[26px] font-[500] text-[16px]">Category</h2>
                <div className="grid grid-cols-2 gap-[4px] mt-[10px]">
                    {category?.map((item) => (
                        <div
                            key={item.id}
                            className="col-span-1 flex justify-center"
                        >
                            <p
                                onClick={() => handleCategoryClick(item.id)}
                                className={cn(
                                    "bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm",
                                    selectedCategory === item.id &&
                                        "bg-[#15509E] text-white"
                                )}
                            >
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>

                <h2 className="mt-[26px] font-[500] text-[16px]">Brand</h2>
                <div className="grid grid-cols-2 gap-[4px] mt-[10px]">
                    {brand?.map((item) => (
                        <div
                            key={item.id}
                            className="col-span-1 flex justify-center"
                        >
                            <p
                                onClick={() => setSelectedBrand(item.id)}
                                className={cn(
                                    "bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm",
                                    selectedBrand === item.id &&
                                        "bg-[#15509E] text-white"
                                )}
                            >
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="mt-[26px] font-[500] text-[16px]">RAM</h2>
                <div className="grid grid-cols-2 gap-[4px] mt-[10px]">
                    <p className="bg-white py-2 px-1 rounded-full text-center text-[12px] cursor-pointer font-medium shadow-sm">
                        2 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        3 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        4 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        5 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        6 GB
                    </p>
                </div>
                <h2 className="mt-[26px] font-[500] text-[16px]">ROM</h2>
                <div className="grid grid-cols-2 gap-[4px] mt-[10px]">
                    <p className="bg-white py-2 px-1 rounded-full text-center text-[12px] cursor-pointer font-medium shadow-sm">
                        32 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        64 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        128GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        256 GB
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        512 GB
                    </p>
                </div>
                <h2 className="mt-[26px] font-[500] text-[16px]">
                    Battery Capacity
                </h2>
                <div className="grid grid-cols-2 gap-[4px] mt-[10px]">
                    <p className="bg-white py-2 px-1 rounded-full text-center text-[12px] cursor-pointer font-medium shadow-sm">
                        3000 mAh
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        3200 mAh
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        3600 mAh
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        4000 mAh
                    </p>
                    <p className="bg-white py-2 px-6 rounded-full text-center text-[12px] cursor-pointer font-medium w-full shadow-sm">
                        4200 mAh
                    </p>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {(filteredData ?? data)?.map((item: CardType) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-[430px]"
                    >
                        <div
                            onClick={() => router.push(`/${item.id}`)}
                            className="cursor-pointer bg-[#F9FAFB] rounded-t-xl p-4 flex justify-center items-center h-[240px]"
                        >
                            <Image
                                className="object-contain transition-transform duration-300 hover:scale-105"
                                src={`${IMG_API}/${item.image}`}
                                width={180}
                                height={180}
                                alt="product"
                                priority
                            />
                            {item.is_aksiya && (
                                <span className="absolute top-3 left-3 text-[#E81504] bg-white py-[5px] px-[8px] rounded-md text-xs font-bold shadow">
                                    Aksiyada
                                </span>
                            )}
                        </div>
                        <div className="p-4 flex flex-col justify-between h-full">
                            <p
                                onClick={() => router.push(`/${item.id}`)}
                                className="text-sm font-medium text-gray-800 hover:text-blue-600 line-clamp-2 cursor-pointer mb-3"
                            >
                                {item.description}
                            </p>
                            <div className="flex flex-col md:flex-row justify-between md:items-end gap-3">
                                <div>
                                    <strong className="text-[15px] text-gray-900 block">
                                        {formatNumberWithSpaces(item.price)} uzs
                                    </strong>
                                    <p className="mt-1 text-[#F02C96] bg-[#F02C961A] rounded-md py-[6px] px-[8px] text-xs font-medium w-fit">
                                        6 oy / 1 200 000 uzs
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        extraStyle="!p-0 w-10 h-10 justify-center !text-[#545D6A] bg-white hover:bg-gray-100 border border-gray-300 rounded-md"
                                        iconPosition="right"
                                        icon={<CompareIcon />}
                                    />
                                    <Button
                                        extraStyle="!p-0 w-10 h-10 justify-center text-white bg-[#134E9B] hover:bg-[#0f3d7a] rounded-md"
                                        iconPosition="right"
                                        icon={<ShoppingBag size={18} />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
