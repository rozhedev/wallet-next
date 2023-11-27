import { ExtractValFromObj } from "../utils/extractors";
import { AllCurNames, TAllCurNotes, TAllCurNotesScope, TCurIconPath } from "../data/currencies";

// * TMainAssetsItem

export type TMainAssetsItem<TScope extends TAllCurNotesScope> = {
    id: `${TScope}-tooltip`;
    tooltipDisableAttr: "" | "disabled";
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    title: TScope;
};

export type TMainAssetsItemArr = TMainAssetsItem<TAllCurNotesScope>[];

const mainAssetItem: TMainAssetsItem<ExtractValFromObj<TAllCurNotes, AllCurNames.bitcoin>> = {
    id: "bitcoin-tooltip",
    tooltipDisableAttr: "",
    imgPath: `@/public/img/icons/crypto/bitcoin-BTC.svg`,
    imgAlt: AllCurNames.bitcoin,
    title: "Bitcoin (BTC)",
};

// * TMainRateItem

export type TMainRateItem<TScope extends TAllCurNotesScope> = {
    id: `${TScope}-rate`;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    rate: number;
    imgVector: "/arrow-top" | "/arrow-bottom";
};

export type TMainRateItemArr = TMainRateItem<TAllCurNotesScope>[];

const mainRateItem: TMainRateItem<TAllCurNotesScope> = {
    id: "bitcoin-rate",
    imgPath: "@/public/img/icons/crypto/bitcoin-BTC.svg",
    rate: 8888,
    imgVector: "/arrow-top",
};

export type TMainAdvantIconPath = "icon-layers" | "icon-tire" | "icon-utxo" | "icon-globe" | "icon-wallet-connect" | "icon-segwit" | "icon-eye-hide";

export type TMainAdvantItem<T extends string> = {
    id: number;
    imgPath: `/${T}`;
    title: string;
    content: string;
};

export type TMainAdvantItemArr = TMainAdvantItem<TMainAdvantIconPath>[];

const mainAdvantItem: TMainAdvantItem<TMainAdvantIconPath> = {
    id: 5,
    imgPath: "/icon-layers",
    title: "jjgfjjjfgbjhg",
    content: "ueitrtetiihnkgfg",
};
