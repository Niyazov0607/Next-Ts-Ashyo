"use client";
import { getCategories } from "@/Service/getCategories";
import React from "react";

const HeaderBottom = () => {
    const { data, isLoading, isError } = getCategories();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;
    console.log(data);

    return (
        <div className="containers">
            <ul className="flex justify-between items-center gap-[20px] py-[20px] cursor-pointer ">
                {data?.map((category: any) => (
                    <li
                        className="text-[#545D6A] hover:text-[#134E9B] transition duration-300 ease-in-out"
                        key={category.id}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderBottom;
