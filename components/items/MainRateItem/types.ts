import { AllCurNames, TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

export type TApiLinkMask = `wss://stream.binance.com:9443/ws/${string}@trade`


// * TMainAssetsItem
export type TMainRateItem<TScope extends TAllCurNotesScope, UName extends AllCurNames, VMask extends TApiLinkMask> = {
    id: `main-${UName}-rate`;
    className: "main-rate-item " | "main-rate-item top" | "main-rate-item bottom";
    title: TScope;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    apiLink: VMask;
    rate: any;
};

export type TMainRateItemArr = TMainRateItem<TAllCurNotesScope, AllCurNames, TApiLinkMask>[];
