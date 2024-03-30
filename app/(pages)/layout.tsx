"use client";

import Header from "@/modules/layout/Header/index";
import Footer from "@/modules/layout/Footer/index";

import { headerLinks, langSelectOptions } from "@/modules/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer/data";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header
                linksArr={headerLinks}
                langOptionsArr={langSelectOptions}
            ></Header>
            <div className="page">{children}</div>
            <Footer>
                <Footer.NavColumn
                    title="Wallet Info"
                    linksArr={footerInfoLinks}
                />
                <Footer.NavColumn
                    title="Discover"
                    linksArr={footerDiscoverLinks}
                />
            </Footer>
        </>
    );
}
