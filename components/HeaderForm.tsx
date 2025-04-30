"use client";

import React, { ChangeEvent, use, useEffect, useState } from "react";
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
import Link from "next/link";
import Image from "next/image";
import { IMG_API } from "@/hooks/getEnv";
import { instance } from "@/hooks/instance";
import Debounce from "@/hooks/debaunce";
import { HeaderFormType } from "@/types/ActionType";
import { Skeleton } from "./ui/skeleton";

const HeaderForm = () => {
    const t = useTranslations("HeaderTop");
    const { data, isError } = getCategories();
    const [searchValue, setSearchValue] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
        setIsLoading(true);
        setShowSearch(true);

        if (e.target.value.length === 0) {
            setShowSearch(false);
            setIsLoading(false);
        }
    }

    function handleSearchClick(name: string) {
        setSearchValue(name);
        setShowSearch(false);
        setIsLoading(false);
    }

    const searchWaitingValue = Debounce(searchValue, 1000);
    useEffect(() => {
        if (searchWaitingValue) {
            instance()
                .get("/categories/search", {
                    params: { name: searchWaitingValue },
                })
                .then((res) => {
                    setSearchResult(res.data);
                });
            setIsLoading(false);
        }
    }, [searchWaitingValue]);

    const [searchResult, setSearchResult] = useState<HeaderFormType[]>([]);

    return (
        <div className="flex items-center gap-5 relative">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div>
                        <DropdownMenuTrigger asChild>
                            <Button
                                text={t("category")}
                                iconPosition="right"
                                icon={<ArrowDown />}
                            />
                        </DropdownMenuTrigger>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className="w-[1185px] h-[570px] flex z-50 ml-[-230px] bg-white p-0 rounded-none"
                    align="start"
                >
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
                                    className="flex items-center gap-2 text-sm text-gray-700  hover:text-blue-500 cursor-pointer"
                                >
                                    <Link
                                        href={`/category/${item.id}`}
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            className="w-[24px] h-[24px]"
                                            src={`${IMG_API}/${item.icon}`}
                                            alt="category"
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                        {item.name}
                                    </Link>
                                </div>
                            ))}
                    </div>

                    <div className="w-3/4 pl-6 grid grid-cols-2 gap-10 pt-[20px]">
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

            <div className="w-[518px] relative ">
                <Input
                    value={searchValue}
                    onchange={handleSearch}
                    placeholder={t("search")}
                    type="text"
                    extraStyle="!w-full"
                />
                <Button
                    extraStyle="!w-[58px] !h-[58px] !p-0 absolute top-0 bottom-0 right-0"
                    icon={<SearchIcon />}
                    iconPosition="right"
                />
                <ul
                    className={`!z-[9999999] ${
                        showSearch
                            ? `${
                                  searchResult.length > 2
                                      ? "h-[300px] overflow-auto "
                                      : "h-auto"
                              } py-[20px]`
                            : "h-0 overflow-hidden"
                    } duration-300 top-full bg-white shadow w-[260px] flex flex-col absolute !z-50 mt-[12px]`}
                >
                    {isLoading
                        ? Array.from({ length: searchResult.length || 0 }).map(
                              (_, index) => (
                                  <li
                                      key={index}
                                      className="flex items-center space-x-4 px-4 py-2"
                                  >
                                      <div className="flex flex-col space-y-2">
                                          <Skeleton className="h-4 w-[230px] rounded-md bg-gray-300 animate-pulse" />
                                      </div>
                                  </li>
                              )
                          )
                        : showSearch &&
                          searchResult.map((item) => (
                              <li
                                  onClick={() => handleSearchClick(item.name)}
                                  className="cursor-pointer pl-4 py-2 border-b text-[#545D6A] border-[#545D6A] hover:bg-gray-100"
                                  key={item.id}
                              >
                                  {item.name}
                              </li>
                          ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderForm;
