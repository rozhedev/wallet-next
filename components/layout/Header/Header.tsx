"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { THeaderProps } from "./types";
import Select from "@/ui/Select/Select";
import LinkList from "@/components/LinkList/index";

import logo from "@/public/img/logo.svg";

export const Header: FC<THeaderProps> = ({ linksArr, children, langOptionsArr }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuOpenHandler = () => setIsMenuOpen((prevState) => !prevState);

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
                >
                    <Image
                        src={logo}
                        alt="Flem Wallet"
                    />
                </Link>
                <div className="menu">
                    <div
                        className={`menu__icon ${isMenuOpen ? "_active" : ""}`}
                        onClick={menuOpenHandler}
                    >
                        <span></span>
                    </div>
                    <nav className={`menu__body ${isMenuOpen ? "_active" : ""}`}>
                        <ul className="menu__list">
                            <LinkList linksArr={linksArr} />

                            <li>{children}</li>
                            <li className="inline-btn">
                                <Link
                                    href="/register"
                                    className="navlink"
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                                        <path d="M50.2856 59.4285V41.1428" />
                                        <path d="M41.1428 50.2856H59.4285" />
                                    </svg>
                                    <span>Register</span>
                                </Link>
                            </li>
                            <li className="inline-btn">
                                <Link
                                    href="/signin"
                                    className="navlink"
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.7142 18.2858V4.57153H50.2857V59.4287H13.7142V45.7144" />
                                        <path d="M27.4286 41.1429L36.5714 32L27.4286 22.8572" />
                                        <path d="M4.57141 32H36.5714" />
                                    </svg>
                                    <span>Sign in</span>
                                </Link>
                            </li>
                            <li>
                                <Select
                                    id="header-select-lang"
                                    className="select select--header"
                                    disabled={false}
                                    title="header-select-lang"
                                    svgIcon={
                                        <svg
                                            viewBox="0 0 64 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M54.8571 17.3372C47.9088 21.3484 40.023 23.45 32 23.4286C23.977 23.45 16.0911 21.3484 9.14282 17.3372" />
                                            <path d="M9.14282 46.72C16.0814 42.7247 23.9476 40.6218 31.9542 40.6218C39.9609 40.6218 47.8271 42.7247 54.7657 46.72" />
                                            <path d="M28.5713 59.4287C22.6366 51.5157 19.4285 41.8913 19.4285 32.0001C19.4285 22.1089 22.6366 12.4845 28.5713 4.57153" />
                                            <path d="M35.4285 4.57153C41.3632 12.4845 44.5713 22.1089 44.5713 32.0001C44.5713 41.8913 41.3632 51.5157 35.4285 59.4287" />
                                            <path d="M32.0001 59.4287C47.1485 59.4287 59.4287 47.1485 59.4287 32.0001C59.4287 16.8517 47.1485 4.57153 32.0001 4.57153C16.8517 4.57153 4.57153 16.8517 4.57153 32.0001C4.57153 47.1485 16.8517 59.4287 32.0001 59.4287Z" />
                                        </svg>
                                    }
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
