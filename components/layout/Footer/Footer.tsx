"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { TFooterProps, TFooterNavColumnProps } from "./types";
import LinkList from "@/components/LinkList/index";

import logo from "@/public/img/logo.svg";

export const Footer = ({ children }: TFooterProps): JSX.Element => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__subscribe">
                    <Link
                        href="/"
                        className="logo"
                    >
                        <Image
                            src={logo}
                            alt="Flem Wallet"
                        />
                    </Link>
                    <div className="footer__copyright navlink">&copy; 2021-2023 Flem Wallet LTD. All rights reserved.</div>
                </div>
                {children}
            </div>
        </footer>
    );
};

// * Footer navigation
const FooterNavColumn: FC<TFooterNavColumnProps> = ({ title, linksArr }) => {
    return (
        <div className="footer-nav-column">
            <h5 className="h3">{title}</h5>
            <ul className="footer-nav-column__list">
                <LinkList linksArr={linksArr} />
            </ul>
        </div>
    );
};

Footer.NavColumn = FooterNavColumn;
