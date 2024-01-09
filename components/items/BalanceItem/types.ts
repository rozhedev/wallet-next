import { TAllCurNotesScope } from "@/types/data/currencies";
import { ExtractValFromObj } from "@/types/utils/utils";
import { TStoreAssetsItem } from "@/components/items/StoreAssetsItem";

export type TBalanceItem<TAssetsItem extends TStoreAssetsItem<TAllCurNotesScope>> = {
    id: ExtractValFromObj<TAssetsItem, "id">;
    curIconPath: ExtractValFromObj<TAssetsItem, "curIconPath">;
    curIconAlt: ExtractValFromObj<TAssetsItem, "curIconAlt">;
    curName: ExtractValFromObj<TAssetsItem, "curName">;
    pureAmount: number;
    usdAmount: number;
    isAssetsCab?: boolean;
};

export type TBalanceItemArr = TBalanceItem<TStoreAssetsItem<TAllCurNotesScope>>[];
