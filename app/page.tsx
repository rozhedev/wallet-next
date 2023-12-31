"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { lazy } from "react";

import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList";

import Header, { headerLinks, dropdownLinks, langSelectOptions } from "@/modules/layout/Header";
import Footer, { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer";
import SectionLayout from "@/modules/layout/SectionLayout";
import Promo, { promoTitle } from "@/modules/Main/Promo";
import MainAssets, { mainAssetsPromo } from "@/modules/Main/MainAssets";
import MainRate from "@/modules/Main/MainRate";
import Advant from "@/modules/Main/Advant";
import MainDownload from "@/modules/Main/MainDownload";

// * Items data
import { mainAssetItemArr } from "@/components/items/MainAssetsItem";
import { mainRateItemArr } from "@/components/items/MainRateItem";
import { mainAdvantItemArr } from "@/components/items/AdvantItem";
import { downloadColumnArr } from "@/components/DownloadColumn";

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
                    <MainAssets
                        promoTitle={mainAssetsPromo}
                        dataArr={mainAssetItemArr}
                    />
                </SectionLayout>
                <SectionLayout id="exchange-rate">
                    <MainRate dataArr={mainRateItemArr} />
                </SectionLayout>
                <SectionLayout id="advant">
                    <Advant dataArr={mainAdvantItemArr} />
                </SectionLayout>
                <SectionLayout id="download">
                    <MainDownload dataArr={downloadColumnArr} />
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
