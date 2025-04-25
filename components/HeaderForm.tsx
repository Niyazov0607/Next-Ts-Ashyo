"use client";

import React, { use } from "react";
import Button from "./Button";
import { ArrowDown, SearchIcon } from "@/assets/icons";
import Input from "./Input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { getCategories } from "@/service/getCategories";

const HeaderForm = () => {
    const t = useTranslations("HeaderTop");
    const { data, isLoading, isError } = getCategories();

    return (
        <div className="flex items-center gap-5">
            {/* Categories Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div>
                        <Button
                            text={t("category")}
                            iconPosition="right"
                            icon={<ArrowDown />}
                        />
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className="w-[1185px] h-[570px] flex z-50 ml-[-230px] bg-white p-0 rounded-none"
                    align="start"
                >
                    {/* Left Sidebar */}
                    <div className="w-1/4 pl-10 pt-[20px] space-y-4 bg-[#EBEFF3] h-full">
                        {isLoading && (
                            <div className="text-sm text-gray-500">
                                Yuklanmoqda...
                            </div>
                        )}
                        {isError && (
                            <div className="text-sm text-red-500">
                                Kategoriya yuklanmadi
                            </div>
                        )}
                        {!isLoading &&
                            !isError &&
                            data?.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
                                >
                                    {item.name}
                                </div>
                            ))}
                    </div>

                    {/* Right Content */}
                    <div className="w-3/4 pl-6 grid grid-cols-2 gap-10 pt-[20px]">
                        {/* Smartfonlar */}
                        <div>
                            <h3 className="font-semibold mb-2">Smartfonlar</h3>
                            <ul className="space-y-1 text-sm text-gray-700">
                                {[
                                    "Oppo smartfonlar",
                                    "Vivo smartfonlar",
                                    "Realmi smartfonlar",
                                    "Redmi smartfonlar",
                                    "Xiaomi smartfonlar",
                                    "Artel smartfonlar",
                                    "Samsung smartfonlar",
                                    "Iphone smartfonlar",
                                    "Nokia smartfonlar",
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="hover:text-blue-500 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Accessories */}
                        <div>
                            <h3 className="font-semibold mb-2">
                                Telefon aksessurlari
                            </h3>
                            <ul className="space-y-1 text-sm text-gray-700">
                                {[
                                    "Quvvatlagich",
                                    "Telefon g'iloflari",
                                    "Quloqchinlar",
                                    "Xotira chiplari",
                                    "Ekran himoya oynasi",
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="hover:text-blue-500 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Input */}
            <div className="w-[518px] relative">
                <Input
                    placeholder={t("search")}
                    type="text"
                    extraStyle="!w-full"
                />
                <div className="absolute right-0 top-0 h-full flex items-center">
                    <Button
                        extraStyle="!w-[58px] !h-[100%] !p-0"
                        icon={<SearchIcon />}
                        iconPosition="right"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderForm;
