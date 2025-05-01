import Image from "next/image";
import React from "react";

const BannerCate = () => {
    return (
        <div className="  mb-[172px] mt-[100px]">
            <div className="relative containers bg-[#282828] rounded-[10px] flex items-center h-[420px]">
                <div className="absolute top-[17px] left-[64px]">
                    <Image
                        src={"/img.png"}
                        alt="Banner"
                        width={518}
                        height={493}
                        className="w-[518px] h-[493px] object-contain"
                        priority
                    />
                </div>
                <div className="absolute left-[649px]">
                    <div>
                        <p className="text-white font-[700] text-[32px]">
                            Musiqa zavqini his qilish <br />
                            uchun ko'p mablag' sarflash <br />
                            shart emas!
                        </p>
                    </div>
                    <div>
                        <button className="text-[16px] bg-white py-[14px] px-[36px] rounded-[6px]">
                            Batafsil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCate;
