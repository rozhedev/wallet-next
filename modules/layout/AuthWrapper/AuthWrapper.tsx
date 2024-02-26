"use client";

import React, { FC } from "react";
import { TAuthWrapperProps } from "./types";

import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList/index";
import Header from "@/modules/layout/Header/index";
import Footer from "@/modules/layout/Footer/index";

import { headerLinks, dropdownLinks, langSelectOptions } from "@/modules/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer/data";
import { chevronBottomIcon } from "@/data/pages/ui-icons";

export const AuthWrapper: FC<TAuthWrapperProps> = ({ children, className }) => {
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
            <div className={`page ${className}`}>{children}</div>
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
};
