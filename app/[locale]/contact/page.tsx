import {
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
    TwitterIcon,
    YoutubeIcon,
} from "@/assets/icons";
import React from "react";

const Contact = () => {
    return (
        <div className="contacts bg-white min-h-screen py-10 px-4 md:px-20 containers">
            <h1 className="text-2xl font-bold mb-2">Qayta aloqa</h1>
            <p className="text-gray-600 mb-6 max-w-2xl">
                Bizning ishimiz haqidagi fikr mulohazalaringiz bilan bo'lishing
                yoki izohlar maydonida qiziqtirgan savollaringizni yo'llang
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-[700px]">
                <input
                    type="text"
                    placeholder="Ism"
                    className="border p-3 rounded bg-gray-100"
                />
                <input
                    type="text"
                    placeholder="Familiya"
                    className="border p-3 rounded bg-gray-100"
                />
                <input
                    type="text"
                    placeholder="Telefon raqam"
                    className="border p-3 rounded bg-gray-100"
                />
                <input
                    type="email"
                    placeholder="Elektron pochta"
                    className="border p-3 rounded bg-gray-100"
                />
                <textarea
                    placeholder="O'zingizni fikr/mulohazalaringizni qoldiring"
                    className="md:col-span-2 border p-3 rounded bg-gray-100"
                ></textarea>
                <button
                    type="submit"
                    className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded"
                >
                    Yuborish
                </button>
            </form>

            <div className="grid md:grid-cols-2 gap-6 relative">
                {/* Details Section */}
                <div className="space-y-4 text-gray-700 z-10 relative bg-white w-[455px] left-[126px] top-[8px] py-[30px] px-[20px] rounded-[6px]">
                    <h2 className="text-lg font-semibold">OOO "Ashyo"</h2>
                    <p>
                        <strong>Telefon raqam:</strong> +998 71 123 45 56
                    </p>
                    <p>
                        <strong>Elektron pochta:</strong>{" "}
                        <a
                            href="mailto:ashyo@gmail.com"
                            className="text-blue-600"
                        >
                            ashyo@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Manzil:</strong> 100052, O'zbekiston
                        Respublikasi, Toshkent shahri, Bodomzor yo'li 1-tor
                        ko'chasi, 72
                    </p>
                    <div className="flex gap-3 mt-2">
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
                </div>

                {/* Map Section */}
                <div className="w-full z-0 absolute inset-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.364610213823!2d69.24835451542299!3d41.31391340799296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d1cb5b5aab%3A0x4d1ec748a0954e57!2z0KLQoNCm0LfQvtCy0LAg0JjQvdGC0L7QstCw!5e0!3m2!1sru!2s!4v1589876543210!5m2!1sru!2s"
                        width="100%"
                        height="300"
                        loading="lazy"
                        className="rounded border"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
