import { AllCurNames, type TAllCurNotesScope } from "@/types/data/currencies";
import type { TStoreAssetsItem } from "@/components/items/StoreAssetsItem";
import type { TWalletFormatsScope } from "@/types/data/user-balances";
import { ExtractValFromObj } from "@/types/utils/utils";

export type TBalanceItem<TAssetsItem extends TStoreAssetsItem<TAllCurNotesScope>> = {
    id: `balance-item-${AllCurNames}`;
    curIconPath: ExtractValFromObj<TAssetsItem, "curIconPath">;
    curIconAlt: ExtractValFromObj<TAssetsItem, "curIconAlt">;
    curName: ExtractValFromObj<TAssetsItem, "curName">;
    walletAddress: TWalletFormatsScope;
    pureAmount: number;
    usdAmount: number;
    isAdded: ExtractValFromObj<TAssetsItem, "isAdded">;
    isAssetsCab?: boolean;
};

export type TBalanceItemArr = TBalanceItem<TStoreAssetsItem<TAllCurNotesScope>>[];
