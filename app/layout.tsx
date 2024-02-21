import type { Metadata } from "next";

import "@/public/scss/globals.scss";
import localFont from "next/font/local";
import { projectNames } from "@/data/initial";

const titilliumWeb = localFont({
    src: [
        {
            path: "../public/fonts/TitilliumWeb-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/TitilliumWeb-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/TitilliumWeb-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/TitilliumWeb-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});

export const metadata: Metadata = {
    title: projectNames.defWallet,
    description: "Accessible cryptocurrency wallet for different solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={titilliumWeb.className}>
                <div className="wrapper">{children}</div>
            </body>
        </html>
    );
}
