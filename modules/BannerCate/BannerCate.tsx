import Image from "next/image";
import React from "react";

const BannerCate = () => {
    return (
        <div className="  mb-[172px] mt-[100px] ">
            <div className="relative containers bg-[#282828] rounded-[10px] flex items-center md:h-[510px] h-[160px]">
                <div className="absolute top-[17px] md:left-[64px]">
                    <Image
                        src={"/img.png"}
                        alt="Banner"
                        width={518}
                        height={493}
                        className="md:w-[518px] md:h-[493px] object-contain w-[188px] h-[178px]"
                        priority
                    />
                </div>
                <div className="absolute md:left-[649px] left-[200px]">
                    <div>
                        <p className="text-white font-[700] md:text-[32px] text-[14px]">
                            Musiqa zavqini his qilish <br />
                            uchun ko'p mablag' sarflash <br />
                            shart emas!
                        </p>
                    </div>
                    <div>
                        <button className="md:text-[16px] bg-white md:py-[14px] md:px-[36px] rounded-[6px] text-[14px] py-[9px] px-[20px]">
                            Batafsil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCate;
