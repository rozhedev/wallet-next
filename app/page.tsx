"use client";

import React from "react";

import Header from "@/components/layout/Header/index";
import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList/index";
import { headerLinks, dropdownLinks, langSelectOptions } from "@/components/layout/Header/data";

export default function Home() {
    return (
        <main
            className="main page"
            id="main"
            style={{backgroundColor: "#111"}}
        >
            <section
                className="promo"
                id="promo"
            >
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
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <h1 className="h1" style={{color: "#fff"}}>h1 Lorem ipsum dolor sit amet...</h1>
                    <br />
                </div>
            </section>
        </main>
    );
}
