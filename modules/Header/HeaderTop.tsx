import { ArrowDown, LocalIcons } from "@/assets/icons";
import Link from "next/link";
import React from "react";

const HeaderTop = () => {
    return (
        <div className="w-full bg-[#EBEFF3] py-[11px] text-[#545D6A]">
            <div className="containers flex justify-between items-center">
                <nav className="flex items-center gap-[28px]">
                    <Link href="/" className="flex items-center gap-2">
                        {" "}
                        <LocalIcons />
                        <span>Tashkent</span>
                    </Link>
                    <Link href="/about" className="flex items-center gap-2">
                        About Us
                    </Link>
                    <Link href="/contact" className="flex items-center gap-2">
                        Products
                    </Link>
                    <Link href="/blog" className="flex items-center gap-2">
                        Contacts
                    </Link>
                </nav>
                <div className="flex items-center gap-[25px]">
                    <Link
                        href="tel:+998(71)1234567"
                        className="flex items-center gap-2"
                    >
                        +998 (71) 123-45-67
                    </Link>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span>Uz</span>
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
