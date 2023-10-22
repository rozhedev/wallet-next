import { ExtractValFromObj } from "../utils/extractors";
import { AllCurNames, AllCurNotations, AllCurNotationsScope, CurIconPath } from "../../data/currencies";

export type MainLinks = {
    label: string;
    path: `/${string}`;
}[];

const aviableLinks: MainLinks = [
    {
        label: "Home",
        path: "/",
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

export type MainAssetsItem<T extends AllCurNotationsScope> = {
    id: `${T}-tooltip`;
    tooltipDisableAttr: "" | "disabled";
    imgPath: CurIconPath<AllCurNotationsScope>;
    imgAlt: T;
    title: T;
};

export type MainAssetsItems = MainAssetsItem<AllCurNotationsScope>[];

const mainAssetItem: MainAssetsItem<ExtractValFromObj<AllCurNotations, AllCurNames.bitcoin>> = {
    id: "bitcoin-tooltip",
    tooltipDisableAttr: "",
    imgPath: `img/icons/crypto/bitcoin-BTC.svg`,
    imgAlt: AllCurNames.bitcoin,
    title: "Bitcoin (BTC)",
};

// * MainRateItem

export type MainRateItem<T extends AllCurNotationsScope> = {
    id: `${T}-rate`;
    imgPath: CurIconPath<AllCurNotationsScope>;
    rate: number;
    imgVector: "/arrow-top" | "/arrow-bottom";
};

export type MainRateItems = MainRateItem<AllCurNotationsScope>[];

const mainRateItem: MainRateItem<AllCurNotationsScope> = {
    id: "bitcoin-rate",
    imgPath: "img/icons/crypto/bitcoin-BTC.svg",
    rate: 8888,
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
