import { TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";
import { ExtractValFromObj } from "@/types/utils/extractors";

export type TCabinetAssetItem<TCurScope extends TAllCurNotesScope> = {
    id: number;
    curIcon: TCurIconPath<TCurScope>;
    curName: TCurScope;
};

export type TCabinetBalanceItem<TAssetItem extends TCabinetAssetItem<TAllCurNotesScope>> = {
    id: number;
    curIcon: ExtractValFromObj<TAssetItem, "curIcon">;
    curName: ExtractValFromObj<TAssetItem, "curName">;
    pureAmount: number;
    usdAmount: number;
};
