"use client";
import { IMG_API } from "@/hooks/getEnv";
import { getBrands } from "@/service/getBrands";
import { BrandsType } from "@/types/BrandsType";
import Image from "next/image";
import React from "react";
import "./style.css";

const Brands = () => {
    const { data, isLoading, isError } = getBrands();


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading brands</div>;

    return (
        <div>
            <div className="containers !py-[100px]">
                <div className=" wrapper">
                    {data?.map((item: BrandsType) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-center object-contain img"
                        >
                            {" "}
                            {item.image == null ? (
                                <span>{item.name}</span>
                            ) : (
                                <Image
                                    className="w-[206px] h-[73px] object-contain"
                                    src={`${IMG_API}/${item.image}`}
                                    alt={item.name}
                                    width={206}
                                    height={73}
                                    priority
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
