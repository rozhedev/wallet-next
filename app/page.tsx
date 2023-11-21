"use client";

import React from "react";

import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList";
import Header from "@/components/layout/Header/index";
import Footer from "@/components/layout/Footer";

import { headerLinks, dropdownLinks, langSelectOptions } from "@/components/layout/Header/data";
import {footerInfoLinks, footerDiscoverLinks} from '@/components/layout/Footer/data'


export default function Home() {
    return (
        <>
            <main
                className="main page"
                id="main"
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
                        <h1 className="h1">h1 Lorem ipsum dolor sit amet...</h1>
                        <br />
                    </div>
                </section>
                Main assets
            </main>
            <Footer>
                <Footer.NavColumn title="Wallet Info" linksArr={footerInfoLinks}/>
                <Footer.NavColumn title="Discover" linksArr={footerDiscoverLinks} />
            </Footer>
        </>
    );
}
