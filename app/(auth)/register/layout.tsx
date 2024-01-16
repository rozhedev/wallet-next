"use client";

import Header from "@/modules/layout/Header/index";
import Dropdown from "@/ui/Dropdown";
import Footer from "@/modules/layout/Footer/index";

import LinkList from "@/components/LinkList/index";
import { headerLinks, dropdownLinks, langSelectOptions } from "@/modules/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer/data";
import { chevronBottomIcon } from "@/data/pages/ui-icons";

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
                        {chevronBottomIcon}
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
