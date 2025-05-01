"use client";
import { CompareIcon, LikeIcon } from "@/assets/icons";
import Cards from "@/components/Cards/Cards";
import { IMG_API } from "@/hooks/getEnv";
import { getComments } from "@/service/getComments";
import { getSingleCard } from "@/service/getSingleCard";
import { getVariation } from "@/service/getVariation";
import { CarIcon, Clock, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const SinglePage = () => {
    const params = useParams() as { id?: string | number };
    const id = params?.id;

    const [activeTab, setActiveTab] = useState<"characteristics" | "comments">(
        "characteristics"
    );

    function formatNumberWithSpaces(num: number | string): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const { data, isLoading } = getSingleCard(id);
    const { data: variations } = id ? getVariation(id) : { data: [] };
    const { data: comment } = id ? getComments(id) : { data: [] };

    return (
        <>
            <div className="containers !mt-[18px]">
                <div className="mb-[35px] flex gap-[15px]">
                    <Link
                        className="text-[#B6BABF] text-[15px] flex gap-[15px]"
                        href={"/"}
                    >
                        <span>Bosh sahifa</span>
                        <span>/</span>
                    </Link>
                    <Link
                        className="text-[#B6BABF] text-[15px] flex gap-[15px]"
                        href={"/"}
                    >
                        <span>Smatfonlar</span>
                        <span>/</span>
                    </Link>
                    <Link className="text-[#B6BABF] text-[15px]" href={"/"}>
                        {isLoading ? "Yuklanmoqda..." : data?.name}
                    </Link>
                </div>

                <div>
                    {!isLoading && data && (
                        <div key={data.id}>
                            <h1 className="font-bold text-[32px]">
                                {data.name}
                            </h1>

                            <div className="flex items-center mt-[31px] gap-[24px] mb-[80px] ">
                                {/* Thumbnail Images */}
                                <div className="flex space-y-[10px] flex-col cursor-pointer">
                                    {[...Array(4)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#EBEFF3] py-[22px] px-[32px] rounded-[6px]"
                                        >
                                            <Image
                                                className="w-[54px] h-[54px] object-cover rounded"
                                                src={`${IMG_API}/${data.image}`}
                                                alt={`${data.name} thumbnail ${
                                                    index + 1
                                                }`}
                                                width={54}
                                                height={54}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Main Image */}
                                <div className="bg-[#EBEFF3] py-[52px] px-[96px] rounded-[10px] relative">
                                    <Image
                                        src={`${IMG_API}/${data.image}`}
                                        alt={data.name}
                                        width={341}
                                        height={341}
                                    />
                                    <div className="gap-[20px] flex text-[#5F728B]">
                                        <button className="absolute top-[26px] right-[75px] cursor-pointer">
                                            <CompareIcon />
                                        </button>
                                        <button className="absolute top-[26px] right-[31px] cursor-pointer">
                                            <LikeIcon />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        <span className="text-[#515D6C] text-[16px]">
                                            Narxi
                                        </span>{" "}
                                        <span className="font-bold text-[32px] pl-[20px]">
                                            {formatNumberWithSpaces(data.price)}{" "}
                                            UZS
                                        </span>
                                    </p>

                                    <div>
                                        <div>
                                            <button className="text-[#545D6A] py-[19px] px-[97px] bg-[#EBEFF3] rounded-[6px] mt-[36px] cursor-pointer">
                                                Oyiga 456 999 uszdan muddatli
                                                to’lov
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-[14px] ">
                                            <div>
                                                <button className="text-[#134E9B] py-[18px] px-[55px] border-[#134E9B] border-[1px] rounded-[6px] mt-[10px] cursor-pointer">
                                                    Savatga qo‘shish
                                                </button>
                                            </div>
                                            <div>
                                                <button className="bg-[#134E9B] py-[18px] px-[68px] border-[#134E9B] border-[1px] rounded-[6px] mt-[10px] text-white cursor-pointer">
                                                    Xarid qilish
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-[46px] space-y-[20px] text-[#06172DB2]">
                                        <div className="flex items-end gap-[10px]">
                                            <CarIcon />
                                            <p>
                                                Yetkazib berish O’zbekiston
                                                bo’ylab
                                            </p>
                                        </div>
                                        <div className="flex items-end gap-[10px]">
                                            <Store />
                                            <p>
                                                Do’kondi o’zidan olib
                                                ketishingiz mumkin
                                            </p>
                                        </div>
                                        <div className="flex items-end gap-[10px]">
                                            <Clock />
                                            <p>
                                                Tahminiy yetkazib berish vaqti 1
                                                kundan 3 kungacha
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tabs */}
                <div className="comment-feature mb-[100px] w-[651px]">
                    <div className="flex items-center gap-[85px] mb-6">
                        <button
                            onClick={() => setActiveTab("characteristics")}
                            className={`text-[16px] cursor-pointer ${
                                activeTab === "characteristics"
                                    ? "font-bold text-[#000]"
                                    : "text-[#545D6A]"
                            }`}
                        >
                            Telfon xususiyatlari
                        </button>
                        <button
                            onClick={() => setActiveTab("comments")}
                            className={`text-[16px] cursor-pointer ${
                                activeTab === "comments"
                                    ? "font-bold text-[#000]"
                                    : "text-[#545D6A]"
                            }`}
                        >
                            Mijozlarni fikrlari
                        </button>
                    </div>

                    {/* Phone Characteristics */}
                    {activeTab === "characteristics" && (
                        <>
                            {variations?.options?.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="py-[5px] border-b-[2px] text-[#545D6A] text-[16px] border-slate3400 flex items-center border-dashed justify-between"
                                >
                                    <div className="w-[50%]">
                                        {variations.name}
                                    </div>
                                    <div className="w-[50%]">{item?.value}</div>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Comments */}
                    {activeTab === "comments" && (
                        <>
                            {comment?.length > 0 ? (
                                comment.map((c: any) => (
                                    <div
                                        key={c.id}
                                        className="mb-4 p-4 bg-[#f8f9fa] rounded border border-[#e2e8f0]"
                                    >
                                        <p className="text-[#06172D] font-semibold">
                                            {c.username}
                                        </p>
                                        <p className="text-[#545D6A] text-[15px] mt-1">
                                            {c.text}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-[#545D6A]">
                                    Hozircha fikrlar yo'q.
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Other Products */}
            <Cards title="The last view products" api="/products" />
        </>
    );
};

export default SinglePage;
