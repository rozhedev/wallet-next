"use client";

import Header from "@/modules/layout/Header/index";
import Dropdown from "@/ui/Dropdown";
import Footer from "@/modules/layout/Footer/index";

import LinkList from "@/components/LinkList/index";
import { headerLinks, dropdownLinks, langSelectOptions } from "@/modules/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer/data";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header
                linksArr={headerLinks}
                langOptionsArr={langSelectOptions}
            >
                <Dropdown>
                    <Dropdown.Btn>
                        <span>Discover</span>
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                        </svg>
                    </Dropdown.Btn>
                    <Dropdown.Menu>
                        <LinkList linksArr={dropdownLinks} />
                    </Dropdown.Menu>
                </Dropdown>
            </Header>
            <div className="page register-page">{children}</div>
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
