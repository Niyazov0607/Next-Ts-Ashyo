"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Navigation } from "swiper/modules";
import { IMG_API } from "@/hooks/getEnv";
import { getCards } from "@/service/getCards";
import { CardType } from "@/types/CardsType";
import Image from "next/image";
import Button from "../Button";
import { CompareIcon } from "@/assets/icons";
import { ShoppingBag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "@/i18n/navigation";

function formatNumberWithSpaces(num: number | string): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3 !w-[273px] items-end">
            <Skeleton className="h-[202px] w-full rounded-xl bg-gray-300" />
            <div className="space-y-2 mr-[25px]">
                <Skeleton className="h-4 w-[250px] bg-gray-300 ml-[20px]" />
                <Skeleton className="h-4 w-[200px] bg-gray-300 ml-[20px]" />
            </div>
            <div className="flex gap-[10px]">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px] bg-gray-300" />
                    <Skeleton className="h-[30px] w-[100px] bg-gray-300" />
                </div>
                <div className="flex gap-[10px]">
                    <Skeleton className="w-[52px] h-[52px] bg-gray-300" />
                    <Skeleton className="w-[52px] h-[52px] bg-gray-300" />
                </div>
            </div>
        </div>
    );
}

const Cards: FC<{ title: string; api: string }> = ({ title, api }) => {
    const { data, isLoading, isError } = getCards(api);
    const router = useRouter();

    return (
        <div className="cards pb-[80px] justify-center items-center">
            <div className="containers !mb-[50px]">
                <h2 className="text-[32px] font-[700]">{title}</h2>
            </div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {isLoading
                    ? Array.from({ length: 5 }).map((_, idx) => (
                          <SwiperSlide
                              key={idx}
                              className="!w-[273px] gap-[30px]"
                          >
                              <SkeletonCard />
                          </SwiperSlide>
                      ))
                    : data?.map((item: CardType) => (
                          <SwiperSlide
                              key={item.id}
                              className="relative flex flex-col justify-center items-center !w-[273px] wrapper ml-[6px] px-[1px]"
                          >
                              <div
                                  onClick={() => router.push(`${item.id}`)}
                                  className="cursor-pointer bg-[#EBEFF3] items-center justify-center py-[43px] px-[33px] w-full rounded-[8px] "
                              >
                                  <Image
                                      className="w-[202px] h-[202px] object-contain justify-center items-center transition-transform duration-300 hover:scale-110"
                                      src={`${IMG_API}/${item.image}`}
                                      width={202}
                                      height={202}
                                      alt="cards"
                                      priority
                                  />
                                  {item.is_aksiya && (
                                      <span className="text-[#E81504] bg-[#FFFFFF] py-[7px] px-[10px] rounded-[5px] absolute top-[15px] left-[25px]">
                                          Aksiyada
                                      </span>
                                  )}
                              </div>
                              <div>
                                  <p
                                      onClick={() => router.push(`${item.id}`)}
                                      className="line-clamp-2 text-[16px] mt-[16px] mb-[28px] text-[#545D6A] cursor-pointer"
                                  >
                                      {item.description}
                                  </p>
                                  <div className="flex items-end gap-[10px]">
                                      <div>
                                          <strong>
                                              {formatNumberWithSpaces(
                                                  item.price
                                              )}{" "}
                                              uzs
                                          </strong>
                                          <p className="mt-[10px] text-[#F02C96] bg-[#F02C961A] rounded-[3px] py-[7px] px-[10px] text-[14px]">
                                              6 oy / 1 200 000 usz
                                          </p>
                                      </div>
                                      <div className="flex gap-[10px]">
                                          <Button
                                              extraStyle="!p-0 w-[52px] h-[52px] justify-center !text-[#545D6A] bg-transparent hover:bg-gray-100 border-[1px] rounded-[6px]"
                                              iconPosition="right"
                                              icon={<CompareIcon />}
                                          />
                                          <Button
                                              extraStyle="!p-0 w-[52px] h-[52px] justify-center border-[1px] border-[#134E9B] rounded-[6px]"
                                              iconPosition="right"
                                              icon={<ShoppingBag />}
                                          />
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))}
            </Swiper>
        </div>
    );
};

export default Cards;
