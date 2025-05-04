"use client";
import Cards from "@/components/Cards/Cards";
import { useState } from "react";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <>
            <div className="containers flex flex-col md:flex-row min-h-screen ">
                {/* Left sidebar */}
                <div className="w-full md:w-64 p-6 bg-[#EBEFF3] rounded-[8px]">
                    <h2 className="text-lg font-medium mb-6">Ashyo haqida</h2>
                    <p className="text-sm text-gray-600 mb-8">
                        Ashyo 2022 yilda Toshkent shahrida tashkil etilgan.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="font-medium mb-2">
                                Muddatli to'lov
                            </h3>
                            <p className="text-sm text-gray-600">
                                Ashyoda barcha elektronika maishiy texnikalar
                                uchun qulay onlayn to'lov rejasi
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">
                                To'lov usullari
                            </h3>
                            <p className="text-sm text-gray-600">
                                Siz uchun qulay usulda to'lang do'konda, Click,
                                Payme orqali.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">
                                Yetkazib berish
                            </h3>
                            <p className="text-sm text-gray-600">
                                Ashyoda tovarlarni yetkazib berish shartlari.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">
                                Tovarlarga kafolat
                            </h3>
                            <p className="text-sm text-gray-600">
                                Ashyo onlayn do'konining kafolati va shartnoma
                                haqida batafsil ma'lumot bilishingiz mumkin.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium mb-2">Yordam</h3>
                            <p className="text-sm text-gray-600">
                                Tushunmagan narsalaringiz bo'lsa savollaringizni
                                bering
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-6 ">
                    <h1 className="text-[32px] mt-[-30px] font-bold">
                        Ashyo haqida
                    </h1>
                    <div className="bg-[#6F73EE]  text-white py-[60px] px-[171px] mb-6 rounded-lg text-center items-center justify-center">
                        <h1 className="text-[150px] font-black">Ashyo</h1>
                    </div>

                    <div className="bg-white p-6 rounded">
                        <p className="text-gray-600 mb-4">
                            Ashyo - bozor narxid maishiy texnika va electronics
                            dukonlari qurilmalari. 2 oydan davomid mahsulotlarga
                            keng assortimentdagi mahsuotlarni, kafolatli va
                            benson hizmatni taklif etib keladi.
                        </p>

                        <p className="text-gray-600 mb-4">
                            Ashyo 2022 yilda Toshkent shahrida tashkil etilgan.
                            Bugungi kunga qadar jami poytaxda va viloyatlarda 26
                            that dukon faoliyat ko'rsatmoqda.
                        </p>

                        <p className="text-gray-600 mb-4">
                            Siz tovarlarni har kanday kulay usulda sotib
                            olishingiz mumkin: tarmoq dukonlarida yoki website.
                            Maishiy uchun texnikasi onlayn bilib t'lov rezhashli
                            mavjud. Ruyhatdan utish uchun zarur bulgan hujzhat -
                            bu pasport.
                        </p>

                        <p className="text-gray-600 mb-4">
                            Yuridik shaxslar uchun pul o'tkazish yo'li bilan,
                            eng muximi - qoshimcha to'lovlarsiz sotib olish
                            mumkin.
                        </p>

                        <div className="flex space-x-4 mt-6">
                            <button className="p-2 border rounded hover:bg-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                    />
                                </svg>
                            </button>
                            <button className="p-2 border rounded hover:bg-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Cards title="The last view products" api="/products" />{" "}
        </>
    );
}
