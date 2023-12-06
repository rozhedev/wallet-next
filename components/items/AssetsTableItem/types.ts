import { TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

export type TIconPath = "/icon-checkmark" | "/icon-unaviable";

type TIconsConfigItem<TScope extends TAllCurNotesScope> = {
    id: number;
    // * curName need for correct icon manage
    curName: TScope;
    sendPC: boolean;
    receivePC: boolean;
    sendPhone: boolean;
    receivePhone: boolean;
    exchange: boolean;
    buy: boolean;
    stacking: boolean;
};

type TIconsConfigItemPure = Omit<TIconsConfigItem<TAllCurNotesScope>, "id" | "curName">;


export type TAssetsTableItem<TScope extends TAllCurNotesScope> = {
    id: number;
    // * Order is additional prop for correct work with backend
    order: number;
    curIcon: TCurIconPath<TAllCurNotesScope>;
    curName: TScope;
    iconPaths: TIconsConfigItemPure;
};

export type TAssetsTableItemArr = TAssetsTableItem<TAllCurNotesScope>[];

//*  USAGE

import ethereumETH from "@/public/img/icons/crypto/ethereum-ETH.svg";
const testAssetsTableItem: TAssetsTableItem<TAllCurNotesScope> = {
    id: 2,
    order: 2,
    curIcon: ethereumETH,
    curName: "Ethereum",
    iconPaths: {
        sendPC: true,
        receivePC: false,
        sendPhone: true,
        receivePhone: false,
        exchange: true,
        buy: false,
        stacking: true,
    },
};
