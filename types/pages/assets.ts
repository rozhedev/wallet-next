import { ExtractValFromObj } from "../utils/extractors";
import { AllCurNotations, AllCurNotationsScope, CurIconPath } from "../../data/currencies";

export type IconPaths = "/icon-checkmark" | "/icon-unaviable";

type IconsItemConfig = {
    sendPC: boolean;
    receivePC: boolean;
    sendPhone: boolean;
    receivePhone: boolean;
    exchange: boolean;
    buy: boolean;
    stacking: boolean;
};

type IconsPathsItem<T extends AllCurNotationsScope> = {
    id: number;
    // * curName need for correct icon manage
    curName: T;
    sendPC: IconPaths;
    receivePC: IconPaths;
    sendPhone: IconPaths;
    receivePhone: IconPaths;
    exchange: IconPaths;
    buy: IconPaths;
    stacking: IconPaths;
};

type IconsPathsItemPure = Omit<IconsPathsItem<AllCurNotationsScope>, "id" | "curName">;
type IconsPathsItems = IconsPathsItemPure[];

export function checkIconStatus(isCurAvailable: boolean): IconPaths {
    let path: IconPaths;
    isCurAvailable ? (path = "/icon-checkmark") : (path = "/icon-unaviable");
    return path;
}

export type AssetsTableItem<T extends AllCurNotationsScope> = {
    id: number;
    order: number;
    curIcon: CurIconPath<AllCurNotationsScope>;
    curName: T;
    iconPaths: IconsPathsItemPure;
};

export type AssetsTableItems = AssetsTableItem<AllCurNotationsScope>[];

//*  USAGE

const iconStatusConfig: IconsItemConfig = {
    sendPC: true,
    receivePC: false,
    sendPhone: true,
    receivePhone: false,
    exchange: true,
    buy: false,
    stacking: true,
};

export const assetsTableItem: AssetsTableItem<AllCurNotationsScope> = {
    id: 2,
    order: 2,
    curIcon: "img/icons/crypto/ethereum-ETH.svg",
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
