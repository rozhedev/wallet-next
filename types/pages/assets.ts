import { ExtractValFromObj } from "../utils/extractors";
import { TAllCurNotes, TAllCurNotesScope, TCurIconPath } from "../data/currencies";

export type TIconPath = "/icon-checkmark" | "/icon-unaviable";

type TIconsItemConfig = {
    sendPC: boolean;
    receivePC: boolean;
    sendPhone: boolean;
    receivePhone: boolean;
    exchange: boolean;
    buy: boolean;
    stacking: boolean;
};

type TIconsPathItem<TScope extends TAllCurNotesScope> = {
    id: number;
    // * curName need for correct icon manage
    curName: TScope;
    sendPC: TIconPath;
    receivePC: TIconPath;
    sendPhone: TIconPath;
    receivePhone: TIconPath;
    exchange: TIconPath;
    buy: TIconPath;
    stacking: TIconPath;
};

type TIconsPathItemPure = Omit<TIconsPathItem<TAllCurNotesScope>, "id" | "curName">;
type TIconsPathItems = TIconsPathItemPure[];

export function checkIconStatus(isCurAvailable: boolean): TIconPath {
    let path: TIconPath;
    isCurAvailable ? (path = "/icon-checkmark") : (path = "/icon-unaviable");
    return path;
}

export type TAssetsTableItem<TScope extends TAllCurNotesScope> = {
    id: number;
    order: number;
    curIcon: TCurIconPath<TAllCurNotesScope>;
    curName: TScope;
    iconPaths: TIconsPathItemPure;
};

export type AssetsTableItems = TAssetsTableItem<TAllCurNotesScope>[];

//*  USAGE

const iconStatusConfig: TIconsItemConfig = {
    sendPC: true,
    receivePC: false,
    sendPhone: true,
    receivePhone: false,
    exchange: true,
    buy: false,
    stacking: true,
};

export const assetsTableItem: TAssetsTableItem<TAllCurNotesScope> = {
    id: 2,
    order: 2,
    curIcon: "@/public/img/icons/crypto/ethereum-ETH.svg",
    curName: "Ethereum",
    iconPaths: {
        sendPC: checkIconStatus(iconStatusConfig.sendPC),
        receivePC: checkIconStatus(iconStatusConfig.receivePC),
        sendPhone: checkIconStatus(iconStatusConfig.sendPhone),
        receivePhone: checkIconStatus(iconStatusConfig.receivePhone),
        exchange: checkIconStatus(iconStatusConfig.exchange),
        buy: checkIconStatus(iconStatusConfig.buy),
        stacking: checkIconStatus(iconStatusConfig.stacking),
    },
};
