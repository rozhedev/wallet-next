import { AllCurNames, type TAllCurNotesScope } from "@/types/data/currencies";
import type { TCurIconPath } from "@/types/data/shared";
import type { TWalletFormatsScope } from "@/types/data/user-balances";

export type TStoreAssetsItem<TCurScope extends TAllCurNotesScope> = {
    id: `store-asset-item-${AllCurNames}`;
    curIconPath: TCurIconPath<TCurScope>;
    curIconAlt: TCurScope;
    curName: TCurScope;
    walletAddress?: TWalletFormatsScope;
    isAdded: boolean;
};

export type TStoreAssetsItemArr = TStoreAssetsItem<TAllCurNotesScope>[];
