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
                {/* Breadcrumb */}
                <div className="mb-[35px] flex flex-wrap gap-[5px] text-[15px] text-[#B6BABF]">
                    <Link href="/" className="flex items-center gap-1">
                        <span>Bosh sahifa</span>
                        <span>/</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-1">
                        <span>Smatfonlar</span>
                        <span>/</span>
                    </Link>
                    <Link href="/" className="flex items-center">
                        {isLoading ? "Yuklanmoqda..." : data?.name}
                    </Link>
                </div>

                {/* Main Product Content */}
                <div>
                    {isLoading ? (
                        <div className="flex md:flex-col md:flex-row items-center mt-[31px] gap-[24px] mb-[80px] animate-pulse">
                            <div className="flex flex-col space-y-[10px]">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-200 rounded-[6px] w-[80px] h-[70px] md:w-[118px] md:h-[98px]"
                                    />
                                ))}
                            </div>
                            <div className="relative bg-gray-200 rounded-[10px] w-[200px] h-[200px] md:w-[341px] md:h-[341px]" />
                            <div className="flex-1 space-y-5 pl-0 md:pl-6 w-full">
                                <div className="h-[32px] w-[180px] md:w-[280px] bg-gray-200 rounded" />
                                <div className="h-[56px] w-[220px] md:w-[308px] bg-gray-200 rounded mt-[36px]" />
                                <div className="flex gap-[14px] mt-[10px]">
                                    <div className="h-[54px] w-[140px] md:w-[187px] bg-gray-200 rounded" />
                                    <div className="h-[54px] w-[180px] md:w-[220px] bg-gray-200 rounded" />
                                </div>
                                <div className="mt-[46px] space-y-5">
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-[24px] w-[250px] md:w-[350px] bg-gray-200 rounded"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        data && (
                            <div key={data.id}>
                                <h1 className="font-bold md:text-[32px] text-[20px] mb-4">
                                    {data.name}
                                </h1>

                                <div className="md:flex gap-[24px] md:flex-row flex-col">
                                    {/* Thumbnails & Main Image */}
                                    <div className="flex items-center mt-[31px] gap-[24px] mb-[80px] ">
                                        <div className="flex space-y-[10px] flex-col cursor-pointer">
                                            {[...Array(4)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-[#EBEFF3] md:py-[22px] md:px-[32px] rounded-[6px]  py-[7px] px-[20px]"
                                                >
                                                    <Image
                                                        className="md:w-[54px] md:h-[54px] w-[40px] h-[40px] object-contain rounded"
                                                        src={`${IMG_API}/${data.image}`}
                                                        alt={`${
                                                            data.name
                                                        } thumbnail ${
                                                            index + 1
                                                        }`}
                                                        width={54}
                                                        height={54}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Main Image */}
                                        <div className="bg-[#EBEFF3] md:py-[52px] md:px-[96px] rounded-[10px] relative py-[30px] px-[40px]">
                                            <Image
                                                className="md:w-[341px] md:h-[341px] w-[200px] h-[200px] object-contain"
                                                src={`${IMG_API}/${data.image}`}
                                                alt={data.name}
                                                width={341}
                                                height={341}
                                            />
                                            <div className="gap-[20px] flex text-[#5F728B]">
                                                <button className="absolute md:top-[26px] top-[15px] right-[75px] cursor-pointer">
                                                    <CompareIcon />
                                                </button>
                                                <button className="absolute md:top-[26px] top-[15px] right-[31px] cursor-pointer">
                                                    <LikeIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-[20px] md:mt-[50px] space-y-4">
                                        <p className="text-[#515D6C] text-[12px] md:text-[16px]">
                                            Narxi{" "}
                                            <span className="font-bold text-[24px] md:text-[32px] pl-[10px]">
                                                {formatNumberWithSpaces(
                                                    data.price
                                                )}{" "}
                                                UZS
                                            </span>
                                        </p>

                                        <button className="w-full bg-[#EBEFF3] text-[#545D6A] py-[14px] rounded-[6px] text-[12px] md:text-[16px]">
                                            Oyiga 456 999 uszdan muddatli to’lov
                                        </button>

                                        <button className="md:hidden w-full bg-[#134E9B] text-white py-[11px] rounded-[3px]">
                                            Hoziroq sotib olish
                                        </button>

                                        <div className="flex flex-col md:flex-row gap-3 md:justify-start">
                                            <button className="flex-1 border border-[#134E9B] text-[#134E9B] py-[11px] rounded-[6px]">
                                                Savatga qo‘shish
                                            </button>
                                            <button className="flex-1 bg-[#134E9B] text-white py-[11px] rounded-[6px]">
                                                Xarid qilish
                                            </button>
                                        </div>

                                        <div className="mt-[30px] space-y-[20px] text-[#06172DB2]">
                                            <div className="flex items-center gap-[10px]">
                                                <CarIcon />
                                                <p>
                                                    Yetkazib berish O’zbekiston
                                                    bo’ylab
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-[10px]">
                                                <Store />
                                                <p>
                                                    Do’kondi o’zidan olib
                                                    ketishingiz mumkin
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-[10px]">
                                                <Clock />
                                                <p>
                                                    Tahminiy yetkazib berish
                                                    vaqti 1 kundan 3 kungacha
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Tabs */}
                <div className="comment-feature mb-[100px] w-full md:w-[651px] mt-[20px]">
                    <div className="flex gap-6 md:gap-[85px] mb-6 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("characteristics")}
                            className={`text-[14px] md:text-[16px] whitespace-nowrap ${
                                activeTab === "characteristics"
                                    ? "font-bold text-[#000]"
                                    : "text-[#545D6A]"
                            }`}
                        >
                            Telfon xususiyatlari
                        </button>
                        <button
                            onClick={() => setActiveTab("comments")}
                            className={`text-[14px] md:text-[16px] whitespace-nowrap ${
                                activeTab === "comments"
                                    ? "font-bold text-[#000]"
                                    : "text-[#545D6A]"
                            }`}
                        >
                            Mijozlarni fikrlari
                        </button>
                    </div>

                    {/* Characteristics */}
                    {activeTab === "characteristics" && (
                        <>
                            {variations?.options?.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="py-[5px] border-b-[2px] text-[#545D6A] text-[16px] border-slate-300 flex items-center border-dashed justify-between"
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
                                        className="mb-4 p-4 md:p-4 p-3 bg-[#f8f9fa] rounded border border-[#e2e8f0] w-full"
                                    >
                                        <p className="text-[#06172D] font-semibold text-[14px] md:text-[16px]">
                                            {c.username}
                                        </p>
                                        <p className="text-[#545D6A] text-[13px] md:text-[15px] mt-1">
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
