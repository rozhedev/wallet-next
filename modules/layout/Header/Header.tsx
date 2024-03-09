"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import type { THeaderProps } from "./types";
// import Select from "@/ui/Select/Select";
import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList/index";

import { ROUTES } from "@/data/routes";
import logo from "@/public/img/logo.svg";
import { chevronBottomIcon, doorEnterIcon, globeIcon, userAddIcon } from "@/data/pages/ui-icons";
import { isWindowUndefined } from "@/utils/predicates";
import { dropdownLinks } from "./data";

export const Header: FC<THeaderProps> = ({ linksArr, children, langOptionsArr }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { data: session } = useSession();

    const menuToggleHandler = () => setIsMenuOpen(() => !isMenuOpen);

    // * Scroll disabling
    if (isWindowUndefined()) {
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
                        alt="Flenn Wallet"
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
                            {/* //* Additional children for adding dropdown, links, etc. */}
                            <li>{children}</li>

                            <LinkList
                                linksArr={linksArr}
                                handler={menuToggleHandler}
                            />
                            <li>
                                <Dropdown>
                                    <Dropdown.Btn>
                                        <span>Discover</span>
                                        {chevronBottomIcon}
                                    </Dropdown.Btn>
                                    <Dropdown.Menu>
                                        <LinkList
                                            linksArr={dropdownLinks}
                                            handler={menuToggleHandler}
                                        />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            {session?.user?.name ? (
                                <li className="inline-btn">
                                    <Link
                                        href={ROUTES.private.dashboard}
                                        className="navlink"
                                        scroll={false}
                                        onClick={menuToggleHandler}
                                    >
                                        {doorEnterIcon}
                                        <span>{session?.user?.name}</span>
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li className="inline-btn">
                                        <Link
                                            href={ROUTES.public.register}
                                            className="navlink"
                                            scroll={false}
                                            onClick={menuToggleHandler}
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
                                            onClick={menuToggleHandler}
                                        >
                                            {doorEnterIcon}
                                            <span>Sign in</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                            {/* //* Uncomment, when create multilang versions */}
                            {/* <li>
                                <Select
                                    id="header-select-lang"
                                    className="select select--header"
                                    title="header-select-lang"
                                    svgIcon={globeIcon}
                                    options={langOptionsArr}
                                ></Select>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
