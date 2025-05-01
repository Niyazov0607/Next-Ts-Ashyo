import {
    AppStoreIcon,
    FacebookIcon,
    GoogleIcon,
    InputMessageIcon,
    InstagramIcon,
    TelegramIcon,
    TwitterIcon,
    YoutubeIcon,
} from "@/assets/icons";
import Input from "@/components/Input";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="containers mt-[100px] flex items-center justify-between gap-[100px] mt-[60px] mb-[89px]">
            <div>
                <h2>Bizning ijtimoiy tarmoqlarda</h2>
                <div className="flex items-center  gap-[20px] mt-[20px]">
                    <p className="bg-[#F5F5F5] w-[44px] h-[40px] items-center justify-center flex rounded-[6px]">
                        <FacebookIcon />
                    </p>
                    <p className="bg-[#F5F5F5] w-[44px] h-[40px] items-center justify-center flex rounded-[6px]">
                        <YoutubeIcon />
                    </p>
                    <p className="bg-[#F5F5F5] w-[44px] h-[40px] items-center justify-center flex rounded-[6px]">
                        <TelegramIcon />
                    </p>
                    <p className="bg-[#F5F5F5] w-[44px] h-[40px] items-center justify-center flex rounded-[6px]">
                        <TwitterIcon />
                    </p>
                    <p className="bg-[#F5F5F5] w-[44px] h-[40px] items-center justify-center flex rounded-[6px]">
                        <InstagramIcon />
                    </p>
                </div>
                <p>Mobil ilovani yuklab oling</p>

                <div className="flex items-center gap-[20px] mt-[20px]">
                    <p className="bg-[#F5F5F5] w-[188px] h-[66px] items-center justify-center flex  rounded-[6px]  gap-[10px]">
                        <AppStoreIcon />
                        <span>App Store </span>
                    </p>
                    <p className="bg-[#F5F5F5] w-[188px] h-[66px] items-center justify-center flex  rounded-[6px]  gap-[10px]">
                        <GoogleIcon />
                        <span>Google Play</span>
                    </p>
                </div>
                <p className="mt-[57px]">
                    © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
                </p>
            </div>
            <div className="py-[10px] flex flex-col gap-[10px]">
                <p>Menyu</p>
                <Link href="/using" className="text-[#000000B2]">
                    Foydalanish shartlari
                </Link>
                <Link href="/privacy" className="text-[#000000B2]">
                    Maxfiylik va hafsizlik siyosati
                </Link>
                <Link href="/return-policy" className="text-[#000000B2]">
                    Mahsulotlarni va tovarlarni <br />
                    qaytarish siyosati
                </Link>
                <Link href="/contact" className="text-[#000000B2]">
                    Biz bilan aloqa
                </Link>
            </div>
            <div>
                <p>Aloqa</p>
                <Link href="/" className="text-black">
                    +998 (71) 123-45-67
                </Link>
                <Link href="/">Savolingiz bormi?</Link>
                <div className=" items-center gap-[20px] mt-[20px] relative">
                    <Input
                        placeholder=" O’zingiz qiziqtirgan savollarni bering"
                        extraStyle="w-[320px]"
                        type="text"
                    />
                    <button className="absolute right-2 top-4  w-[18px] items-center justify-center flex rounded-[6px]">
                        <InputMessageIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
