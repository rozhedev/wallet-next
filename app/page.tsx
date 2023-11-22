"use client";

import React from "react";

import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList";
import Header from "@/components/layout/Header/index";
import Footer from "@/components/layout/Footer";
import SectionLayout from "@/components/layout/SectionLayout";

import { headerLinks, dropdownLinks, langSelectOptions } from "@/components/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/components/layout/Footer/data";
import Promo from "@/modules/Main/Promo";
import { promoTitle } from "@/modules/Main/Promo/data";

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
                        <Promo title={promoTitle} />
                    </div>
                </section>
                <SectionLayout id="main-assets">
                    <span style={{ color: "#fff" }}>
                        Main assets. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dicta in, est suscipit quod cumque, dolorum illum quaerat quisquam ratione enim tempore nemo
                        incidunt voluptate aliquid sapiente quos maxime qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, magni. Praesentium soluta impedit corporis ut eaque velit,
                        ducimus, ipsam repudiandae dolore ex alias laborum itaque, omnis earum officiis aspernatur at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus itaque
                        dignissimos porro sequi velit saepe, nam, labore qui nostrum, asperiores consequuntur voluptatibus libero obcaecati aperiam deleniti ab voluptates incidunt.
                    </span>
                </SectionLayout>
            </main>
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
