import { ExtractValFromObj } from "../utils/extractors";
import { AllCurNames, AllCurNamesScope } from "../../data/data-unions";

export type TIconPaths = "/icon-checkmark" | "/icon-unaviable";

type TIconsItemConfig = {
    sendPC: boolean;
    receivePC: boolean;
    sendPhone: boolean;
    receivePhone: boolean;
    exchange: boolean;
    buy: boolean;
    stacking: boolean;
};

type TIconsPathsItem<T extends AllCurNamesScope> = {
    id: number;
    // * curName need for correct icon manage
    curName: T;
    sendPC: TIconPaths;
    receivePC: TIconPaths;
    sendPhone: TIconPaths;
    receivePhone: TIconPaths;
    exchange: TIconPaths;
    buy: TIconPaths;
    stacking: TIconPaths;
};

type TIconsPathsItemPure = Omit<TIconsPathsItem<AllCurNamesScope>, "id" | "curName">;
type TIconsPathsItems = TIconsPathsItemPure[];

export function checkIconStatus(isCurAvailable: boolean): TIconPaths {
    let path: TIconPaths;
    isCurAvailable ? (path = "/icon-checkmark") : (path = "/icon-unaviable");
    return path;
}

export type AssetsTableItem<T extends AllCurNamesScope> = {
    id: number;
    order: number;
    curIcon: `img/icons/crypto/${T}.svg`;
    curName: T;
    iconPaths: TIconsPathsItemPure;
};

export type AssetsTableItems = AssetsTableItem<AllCurNamesScope>[];

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

export const assetsTableItem: AssetsTableItem<AllCurNamesScope> = {
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
