"use client";
import { API, IMG_API } from "@/hooks/getEnv";
import { getCategories } from "@/service/getCategories";
import React from "react";
import "./style.css";
import { CategoryType } from "@/types/CategoryType";
import Image from "next/image";

function CategoryBrand() {
    const { data, isLoading } = getCategories();

    return (
        <div className="containers brandCategory_wrapper">
            {data?.slice(0, -1).map((brandCategory: CategoryType) => (
                <div
                    key={brandCategory.id}
                    className={`brandCategory-${brandCategory.id} hover:opacity-[0.85] cursor-pointer duration-300`}
                >
                    {brandCategory.id === 4 && (
                        <div className="brandCategory-4-border"></div>
                    )}
                    <Image
                        className="w-[343px] h-[254px] object-contain overflow-hidden"
                        src={`${IMG_API}/${brandCategory.image}`}
                        alt="category-brand"
                        width={343}
                        height={254}
                        priority
                    />
                    <span className="absolute top-3 left-3 text-white px-4 py-1 rounded-[30px] !z-40 border text-xs">
                        {brandCategory.name}
                    </span>
                </div>
            ))}
            {!isLoading && (
                <button className="brandCategory-7 hover:opacity-[0.85] cursor-pointer">
                    Ko'proq
                </button>
            )}
        </div>
    );
}

export default CategoryBrand;
