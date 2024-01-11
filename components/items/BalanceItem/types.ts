import { AllCurNames, type TAllCurNotesScope } from "@/types/data/currencies";
import { ExtractValFromObj } from "@/types/utils/utils";
import type { TStoreAssetsItem } from "@/components/items/StoreAssetsItem";

export type TBalanceItem<TAssetsItem extends TStoreAssetsItem<TAllCurNotesScope>> = {
    id: `balance-item-${AllCurNames}`;
    curIconPath: ExtractValFromObj<TAssetsItem, "curIconPath">;
    curIconAlt: ExtractValFromObj<TAssetsItem, "curIconAlt">;
    curName: ExtractValFromObj<TAssetsItem, "curName">;
    pureAmount: number;
    usdAmount: number;
    isAssetsCab?: boolean;
};

export type TBalanceItemArr = TBalanceItem<TStoreAssetsItem<TAllCurNotesScope>>[];
