import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/query/QueryProvider";

export const metadata: Metadata = {
    title: "Ashyo",
    description: "Ashyo market for sale",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/ashyoLogo.svg" />
            </head>
            <body className={` antialiased`}>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
