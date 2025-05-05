"use client";

import React from "react";
import "./styles.css";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { IMG_API } from "@/hooks/getEnv";
import { BannersType } from "@/types/BannersType";
import { GetBanners } from "@/service/getBanners";

const Hero = () => {
    const { data, isLoading, isError } = GetBanners();

    if (isLoading) {
        return (
            <div className=" py-10 ">
                <div>
                    <div className="relative h-[450px] flex items-center justify-center bg-[#F3F0F0]">
                        <p className="text-sm text-gray-500">Loading...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className=" py-10">
                <div className="containers text-center text-sm text-red-500">
                    Error loading banners.
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#F3F0F0] ">
            <div className="containers ">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {data?.map((item: BannersType) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative w-full h-[500px] flex items-center justify-between px-8">
                                <div className="max-w-[500px]">
                                    <h2 className="md:text-4xl md:font-black mb-4 text-[#0A1729] text-[22px]">
                                        {item.name}
                                    </h2>
                                    <p className="md:text-lg text-[#545D6A] mb-6 text-[11px]">
                                        {item.description}
                                    </p>
                                    <button className="px-6 py-3 bg-[#134E9B] text-white rounded-md">
                                        Batafsil
                                    </button>
                                </div>
                                <Image
                                    className="absolute md:top-0 bottom-0 right-0 object-cover absolute top-[55%] z-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px]"
                                    src={`${IMG_API}/${item.image}`}
                                    alt={item.name}
                                    width={550}
                                    height={500}
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
