import {
    AppStoreIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    TelegramIcon,
    TwitterIcon,
    YoutubeIcon,
    InputMessageIcon,
} from "@/assets/icons";
import Input from "@/components/Input";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white pt-10 pb-6 text-sm text-[#000000B2]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {/* Left Column */}
                <div>
                    <h3 className="font-semibold mb-3">
                        Bizning ijtimoiy tarmoqlarda
                    </h3>
                    <div className="flex gap-3 mb-6">
                        <div className="bg-[#F5F5F5] w-10 h-10 flex items-center justify-center rounded-md">
                            <FacebookIcon />
                        </div>
                        <div className="bg-[#F5F5F5] w-10 h-10 flex items-center justify-center rounded-md">
                            <YoutubeIcon />
                        </div>
                        <div className="bg-[#F5F5F5] w-10 h-10 flex items-center justify-center rounded-md">
                            <TelegramIcon />
                        </div>
                        <div className="bg-[#F5F5F5] w-10 h-10 flex items-center justify-center rounded-md">
                            <TwitterIcon />
                        </div>
                        <div className="bg-[#F5F5F5] w-10 h-10 flex items-center justify-center rounded-md">
                            <InstagramIcon />
                        </div>
                    </div>

                    <h3 className="font-semibold mb-3">
                        Mobil ilovani yuklab oling
                    </h3>
                    <div className="flex gap-4 mb-4">
                        <div className="bg-[#F5F5F5] w-[160px] h-[50px] flex items-center justify-center rounded-md gap-2">
                            <AppStoreIcon />
                            <span>App Store</span>
                        </div>
                        <div className="bg-[#F5F5F5] w-[160px] h-[50px] flex items-center justify-center rounded-md gap-2">
                            <GoogleIcon />
                            <span>Google Play</span>
                        </div>
                    </div>

                    <p className="text-xs mt-6 text-[#00000080]">
                        © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
                    </p>
                </div>

                {/* Center Column */}
                <div>
                    <h3 className="font-semibold mb-3">Menyu</h3>
                    <ul className="flex flex-col gap-3 text-black">
                        <li>
                            <Link href="/">Ashyo haqida</Link>
                        </li>
                        <li>
                            <Link href="/using">Foydalanish shartlari</Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                Maxfiylik va hafsizlik siyosati
                            </Link>
                        </li>
                        <li>
                            <Link href="/return-policy">
                                Mahsulotlarni va tovarlarni qaytarish siyosati
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">Biz bilan aloqa</Link>
                        </li>
                    </ul>
                </div>

                {/* Right Column */}
                <div>
                    <h3 className="font-semibold mb-3">Aloqa</h3>
                    <p className="text-lg font-semibold mb-2 text-black">
                        +998 (71) 123-45-67
                    </p>
                    <p className="mb-3">Savolingiz bormi?</p>
                    <div className="relative">
                        <Input
                            placeholder="O’zingiz qiziqtirgan savollarni bering"
                            extraStyle="w-full bg-[#F5F5F5] pl-3 pr-10 py-2 rounded-md"
                            type="text"
                        />
                        <button className="absolute right-3 top-2.5">
                            <InputMessageIcon />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
