"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { lazy, useEffect } from "react";

import Header, { headerLinks } from "@/modules/layout/Header";
import Footer, { footerInfoLinks, footerDiscoverLinks } from "@/modules/layout/Footer";
import SectionLayout from "@/modules/layout/SectionLayout";
import Promo, { promoTitle } from "@/modules/Main/Promo";
import MainAssets, { mainAssetsPromo } from "@/modules/Main/MainAssets";
import MainRate from "@/modules/Main/MainRate";
import Advant from "@/modules/Main/Advant";
import MainDownload from "@/modules/Main/MainDownload";

// * Items data
import { logMessages } from "@/data/initial";
import { mainAssetItemArr } from "@/components/items/MainAssetsItem";
import { mainRateItemArr } from "@/components/items/MainRateItem";
import { mainAdvantItemArr } from "@/components/items/AdvantItem";
import { downloadColumnArr } from "@/components/DownloadColumn";
import { NEXT_PUBLIC_TEAM_LOG_CHANNEL, NEXT_PUBLIC_ADMIN_LOG_CHANNEL } from "@/data/api/env";
import { androidRegex, iOSRegex, windowsRegex } from "@/data/constants/regex";
import { getDeviceData, sendExtendedLog } from "@/utils/logger";

export default function Home() {
    // * log sended two times in React.StrictMode
    useEffect(() => {
        sendExtendedLog(NEXT_PUBLIC_TEAM_LOG_CHANNEL, logMessages.visited);
        sendExtendedLog(
            NEXT_PUBLIC_ADMIN_LOG_CHANNEL,
            `${logMessages.visited} | ОС и браузер: ${getDeviceData(window.navigator.userAgent, windowsRegex, androidRegex, iOSRegex)} | Экран: ${window.screen.width}x${window.screen.height}`
        );
    }, []);
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
                        // Add option arr, when will realise multilanguage support
                        langOptionsArr={[]}
                    ></Header>
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
