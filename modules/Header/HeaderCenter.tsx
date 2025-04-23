import { AshyoLogo } from "@/assets/icons";
import HeaderForm from "@/components/HeaderForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderCenterActions from "./HeaderCenterActions";

const HeaderCenter = () => {
    return (
        <div className="py-[20px]">
            <div className="containers flex justify-between items-center  translate-x-[-18px]">
                <Link href="/" className="flex items-center ">
                    <Image
                        src={"/ashyoLogo.svg"}
                        alt="logo"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] object-contain translate-y-[-5px]"
                        priority
                    />

                    <span className="translate-x-[-15px]">
                        <AshyoLogo />
                    </span>
                </Link>
                <HeaderForm />
                <HeaderCenterActions />
            </div>
        </div>
    );
};

export default HeaderCenter;
