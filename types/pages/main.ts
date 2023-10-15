import { ExtractValFromObj } from "../utils/extractors";
import { AllCurNames, AllCurNamesScope } from "../../data/data-unions";

export type MainLinks = {
    label: string;
    path: `/${string}`;
    // getBreadcrumbs: () => string,
}[];

const aviableLinks: MainLinks = [
    {
        label: "Home",
        path: "/",
        // getBreadcrumbs: () => "",
    },
    {
        label: "Assets",
        path: "/assets",
    },
    {
        label: "Promoactions",
        path: "/promoactions",
    },
    {
        label: "Popular questions",
        path: "/faq",
    },
    {
        label: "Privacy Policy",
        path: "/privacy",
    },
    {
        label: "Terms of Service",
        path: "/terms",
    },
    {
        label: "Register",
        path: "/register",
    },
    {
        label: "Sign in",
        path: "/signin",
    },
];

// * MainAssetsItem

export type MainAssetsItem<T extends AllCurNamesScope> = {
    id: `${T}-tooltip`;
    tooltipDisableAttr: "" | "disabled";
    imgPath: `img/icons/crypto/${T}.svg`;
    imgAlt: T;
    title: T;
};

export type MainAssetsItems = MainAssetsItem<AllCurNamesScope>[];

const mainAssetItem: MainAssetsItem<ExtractValFromObj<AllCurNames, "bitcoin">> = {
    id: "bitcoin-tooltip",
    tooltipDisableAttr: "",
    imgPath: `img/icons/crypto/bitcoin-BTC.svg`,
    imgAlt: "bitcoin",
    title: "Bitcoin (BTC)",
};

// * MainRateItem

export type MainRateItem<T extends AllCurNamesScope> = {
    id: `${T}-rate`;
    imgPath: `img/icons/crypto/${T}.svg`;
    rate: `$${number}`;
    imgVector: "/arrow-top" | "/arrow-bottom";
};

export type MainRateItems = MainRateItem<AllCurNamesScope>[];

const mainRateItem: MainRateItem<AllCurNamesScope> = {
    id: "bitcoin-rate",
    imgPath: "img/icons/crypto/bitcoin-BTC.svg",
    rate: "$8888",
    imgVector: "/arrow-top",
};

export type MainAdvantIconPaths = "icon-layers" | "icon-tire" | "icon-utxo" | "icon-globe" | "icon-wallet-connect" | "icon-segwit" | "icon-eye-hide";

export type MainAdvantItem<T extends string> = {
    id: number;
    imgPath: `/${T}`;
    title: string;
    content: string;
};

export type MainAdvantItems = MainAdvantItem<MainAdvantIconPaths>[];

const mainAdvantItem: MainAdvantItem<MainAdvantIconPaths> = {
    id: 5,
    imgPath: "/icon-layers",
    title: "jjgfjjjfgbjhg",
    content: "ueitrtetiihnkgfg",
};
