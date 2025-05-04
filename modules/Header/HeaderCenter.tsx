"use client";
import { AshyoLogo } from "@/assets/icons";
import HeaderForm from "@/components/HeaderForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderCenterActions from "./HeaderCenterActions";
import { Fade as Hamburger } from "hamburger-react";
import { getCategories } from "@/service/getCategories";

const HeaderCenter = () => {
    const [isOpen, setIsOpen] = useState(false);

    // This could be used if you still need categories later
    const { data: category, isLoading, isError } = getCategories();

    return (
        <div className="relative py-[20px] md:px-2.5">
            <div className="containers flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="flex w-full md:w-auto justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 md:gap-4">
                        <Image
                            src="/ashyoLogo.svg"
                            alt="logo"
                            width={70}
                            height={70}
                            className="w-[39px] h-[39px] md:w-[70px] md:h-[70px] "
                            priority
                        />
                        <span className="w-[79px] md:w-auto md:translate-x-[-25px]">
                            <AshyoLogo />
                        </span>
                    </Link>

                    <Link
                        href="tel:+998(71)1234567"
                        className="xl:hidden text-[#203F68] text-sm font-semibold md:hidden"
                    >
                        +998 (71) 123-45-67
                    </Link>

                    {/* Hamburger menu only on mobile */}
                    <div className="md:hidden">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setIsOpen}
                            size={24}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[80px] w-full md:w-auto">
                    <HeaderForm />
                    <div
                        className={`flex w-full md:w-auto ${
                            isOpen ? "block" : "hidden"
                        } md:flex md:flex-row`}
                    >
                        <HeaderCenterActions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCenter;
