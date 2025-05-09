"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
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
import { useSearchParams, useRouter } from "next/navigation";

const HeaderForm = () => {
    const t = useTranslations("HeaderTop");
    const { data, isError } = getCategories();
    const [searchValue, setSearchValue] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activeCategoryId, setActiveCategoryId] = useState<number | null>(
        null
    );
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchResult, setSearchResult] = useState<HeaderFormType[]>([]);

    const router = useRouter();
    const searchParams = useSearchParams();

    const activeCategory = searchParams.get("category");

    useEffect(() => {
        if (activeCategory) {
            setActiveCategoryId(Number(activeCategory));
        }
    }, [activeCategory]);

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

    return (
        <div className="flex items-center gap-5 relative">
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
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
                    className="flex flex-col md:flex-row bg-white z-50 p-0 rounded-none 
                    w-full md:w-[1185px] 
                    h-screen md:h-[570px] 
                    ml-0 md:ml-[-230px] 
                    overflow-y-auto"
                    align="start"
                >
                    <div className="w-full md:w-1/4 px-4 md:pl-10 pt-[20px] space-y-4 bg-[#EBEFF3] h-full">
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
                                    className={`flex items-center gap-2 text-sm cursor-pointer 
                                    ${
                                        activeCategoryId === item.id
                                            ? "text-[#134E9B] font-semibold"
                                            : "text-gray-700 hover:text-[#134E9B] hover:bg-white py-[5px] px-[10px] rounded-[6px] duration-120"
                                    }`}
                                    onClick={() => {
                                        setActiveCategoryId(item.id);
                                        router.push(
                                            `/product?category=${item.id}`
                                        );
                                        setDropdownOpen(false);
                                    }}
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
                                </div>
                            ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const matchedCategory = data?.find((cat: any) =>
                        cat.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    );
                    if (matchedCategory) {
                        router.push(`/product?category=${matchedCategory.id}`);
                        setShowSearch(false);
                        setIsLoading(false);
                    }
                }}
                className="md:w-[518px] relative w-[230px] text-[10px] md:text-[13px]"
            >
                <Input
                    value={searchValue}
                    onchange={handleSearch}
                    placeholder={t("search")}
                    type="text"
                    extraStyle="!w-full"
                />
                <Button
                    extraStyle="md:!w-[55px] md:!h-[54px] !p-0 absolute top-0 bottom-0 right-0 !w-[45px] !h-[49px]"
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
            </form>
        </div>
    );
};

export default HeaderForm;
