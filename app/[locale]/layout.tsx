import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
    title: "Ashyo",
    description: "Ashyo market for sale",
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/ashyoLogo.svg" />
            </head>
            <body className={` antialiased`}>
                <NextIntlClientProvider>
                    <QueryProvider>{children}</QueryProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
