"use client";

import { ArrowDown, LocalIcons } from "@/assets/icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Declare allowed languages
type Language = "uz" | "ru" | "en";

// Runtime validation function
function isValidLang(value: string): value is Language {
    return ["uz", "ru", "en"].includes(value);
}

const HeaderTop = () => {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("HeaderTop");

    const [lang, setLang] = useState<Language>("uz");
    const [isMounted, setIsMounted] = useState(false); // for optional loading fix

    useEffect(() => {
        const cookieLang = getCookie("NEXT_LOCALE");

        if (typeof cookieLang === "string" && isValidLang(cookieLang)) {
            setLang(cookieLang);
        }

        setIsMounted(true);
    }, []);

    function changeLang(value: Language) {
        setLang(value);
        router.push(pathname, {
            locale: value,
        });
    }

    // Optional: Prevent rendering until client is mounted to avoid flicker
    if (!isMounted) return null;

    return (
        <div className="w-full bg-[#EBEFF3] py-[11px] text-[#545D6A]">
            <div className="containers flex justify-between items-center">
                <nav className="flex items-center gap-[28px]">
                    <Link href="/" className="flex items-center gap-2">
                        <LocalIcons />
                        <span>{t("city")}</span>
                    </Link>
                    <Link href="/about" className="flex items-center gap-2">
                        {t("about")}
                    </Link>
                    <Link href="/contact" className="flex items-center gap-2">
                        {t("products")}
                    </Link>
                    <Link href="/blog" className="flex items-center gap-2">
                        {t("contacts")}
                    </Link>
                </nav>

                <div className="flex items-center gap-[25px]">
                    <Link
                        href="tel:+998(71)1234567"
                        className="flex items-center gap-2"
                    >
                        +998 (71) 123-45-67
                    </Link>
                    <Select value={lang} onValueChange={changeLang}>
                        <SelectTrigger className="w-[65px] cursor-pointer border-none bg-none shadow-none outline-none focus:outline-none focus:ring-0">
                            <SelectValue>{lang}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="uz">uz</SelectItem>
                                <SelectItem value="en">en</SelectItem>
                                <SelectItem value="ru">ru</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
