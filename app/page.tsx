"use client";

import React, { lazy } from "react";

import Dropdown from "@/ui/Dropdown";
import LinkList from "@/components/LinkList";
import Header from "@/components/layout/Header/index";
import Footer from "@/components/layout/Footer";
import SectionLayout from "@/components/layout/SectionLayout";

import { headerLinks, dropdownLinks, langSelectOptions } from "@/components/layout/Header/data";
import { footerInfoLinks, footerDiscoverLinks } from "@/components/layout/Footer/data";
import Promo from "@/modules/Main/Promo";
import MainAssets from "@/modules/Main/MainAssets";
import MainRate from "@/modules/Main/MainRate";
import Advant from "@/modules/Main/Advant";
import MainDownload from "@/modules/Main/MainDownload";

import { promoTitle } from "@/modules/Main/Promo/data";
import { mainAssetsPromo } from "@/modules/Main/MainAssets/data";
import { mainAssetItemArr } from "@/components/items/MainAssetsItem/index";
import { mainRateItemArr } from "@/components/items/MainRateItem";
import { mainAdvantItemArr } from "@/components/items/AdvantItem/data";

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
                    <Advant dataArr={mainAdvantItemArr}/>
                </SectionLayout>
                <SectionLayout id="download">
                    <MainDownload dataArr={[]}/>
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
