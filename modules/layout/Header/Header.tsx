"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { THeaderProps } from "./types";
import Select from "@/ui/Select/Select";
import LinkList from "@/components/LinkList/index";

import { ROUTES } from "@/data/routes";
import logo from "@/public/img/logo.svg";
import { doorEnterIcon, globeIcon, userAddIcon } from "@/data/pages/ui-icons";

export const Header: FC<THeaderProps> = ({ linksArr, children, langOptionsArr }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuToggleHandler = () => setIsMenuOpen(() => !isMenuOpen);

    // * Scroll disabling
    if (typeof window !== "undefined") {
        const bodyTag = document.body;
        isMenuOpen ? bodyTag.classList.add("_lock") : bodyTag.classList.remove("_lock");

        // * Other solution
        // document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }

    return (
        <header className="header">
            <div className="container">
                <Link
                    href="/"
                    className="logo"
                    scroll={false}
                >
                    <Image
                        src={logo}
                        alt="Flem Wallet"
                    />
                </Link>
                <div className="menu">
                    <div
                        className={`menu__icon ${isMenuOpen ? "_active" : ""}`}
                        onClick={menuToggleHandler}
                    >
                        <span></span>
                    </div>
                    <nav className={`menu__body ${isMenuOpen ? "_active" : ""}`}>
                        <ul className="menu__list">
                            <LinkList linksArr={linksArr} />

                            <li>{children}</li>
                            <li className="inline-btn">
                                <Link
                                    href={ROUTES.public.register}
                                    className="navlink"
                                    scroll={false}
                                >
                                    {userAddIcon}
                                    <span>Register</span>
                                </Link>
                            </li>
                            <li className="inline-btn">
                                <Link
                                    href={ROUTES.public.signin}
                                    className="navlink"
                                    scroll={false}
                                >
                                    {doorEnterIcon}
                                    <span>Sign in</span>
                                </Link>
                            </li>
                            <li>
                                <Select
                                    id="header-select-lang"
                                    className="select select--header"
                                    title="header-select-lang"
                                    svgIcon={globeIcon}
                                    options={langOptionsArr}
                                ></Select>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
