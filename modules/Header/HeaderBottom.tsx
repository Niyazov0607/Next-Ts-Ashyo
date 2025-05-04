"use client";

import React from "react";
import { getCategories } from "@/service/getCategories";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from "next/link";

const HeaderBottom = () => {
    const { data, isLoading, isError } = getCategories();

    if (isError) {
        return (
            <div className="containers py-4">
                <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Error!</AlertTitle>
                    <AlertDescription>
                        Failed to load categories. Please try again later.
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="containers hidden sm:block">
            <ul className="flex justify-between items-center gap-[20px] py-[20px] cursor-pointer">
                {isLoading
                    ? Array.from({ length: 9 }).map((_, i) => (
                          <Skeleton
                              key={i}
                              className="h-3 w-25 rounded bg-gray-300"
                          />
                      ))
                    : data?.map((category: any) => (
                          <Link
                              href={`/product?category=${category.id}`}
                              className="text-[#545D6A] hover:text-[#134E9B] transition duration-300 ease-in-out"
                              key={category.id}
                          >
                              {category.name}
                          </Link>
                      ))}
            </ul>
        </div>
    );
};

export default HeaderBottom;
