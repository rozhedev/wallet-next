import { AllCurNames, TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

export type TApiLinkMask = `wss://stream.binance.com:9443/ws/${string}@trade`;

// * TMainAssetsItem
export type TMainRateItem<TScope extends TAllCurNotesScope, UName extends AllCurNames, VMask extends TApiLinkMask> = {
    id: `main-${UName}-rate`;
    title: TScope;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    apiLink: VMask;
};

export type TMainRateItemArr = TMainRateItem<TAllCurNotesScope, AllCurNames, TApiLinkMask>[];
