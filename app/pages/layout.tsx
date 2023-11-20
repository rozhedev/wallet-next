"use client"

import Header from "@/components/layout/Header";
import Dropdown from "@/ui/Dropdown";

import LinkList from "@/components/LinkList/index";
import { headerLinks, dropdownLinks, langSelectOptions } from "@/components/layout/Header/data";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="wrapper">
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
            <div className="page">{children}</div>
        </div>
    );
}
