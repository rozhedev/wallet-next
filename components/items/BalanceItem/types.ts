import { StaticImageData } from "next/image";
import { AllCurShortNames, type TAllCurNotesScope } from "@/types/data/currencies";
import type { TCurIconPath } from "@/types/data/shared";

export type TBalanceModalStates = {
    sendCard: boolean
    send: boolean;
    get: boolean;
};

export type TBalanceItem<TCurScope extends TAllCurNotesScope> = {
    id: `balance-item-${AllCurShortNames}`;
    curIconPath: TCurIconPath<TCurScope>;
    curIconAlt: TCurScope;
    curName: TCurScope;
    walletAddress: string;
    pureAmount: number;
    usdAmount: number;
    qrCodeImg: StaticImageData;
    isAdded: boolean;
    isAssetsCab?: boolean;
    toggleItemHandler?: () => void;
};

export type TBalanceItemArr = TBalanceItem<TAllCurNotesScope>[];
