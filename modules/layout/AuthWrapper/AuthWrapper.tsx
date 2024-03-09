"use client";

import React, { FC } from "react";
import { TAuthWrapperProps } from "./types";
import Header from "@/modules/layout/Header/index";
import Footer from "@/modules/layout/Footer/index";

import { headerLinks, langSelectOptions } from "@/modules/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer/data";

export const AuthWrapper: FC<TAuthWrapperProps> = ({ children, className }) => {
    return (
        <>
            <Header
                linksArr={headerLinks}
                langOptionsArr={langSelectOptions}
            ></Header>
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
