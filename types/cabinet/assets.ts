import { AllCurNotationsScope, CurIconPath } from "@/types/data/currencies";
import { ExtractValFromObj } from "@/types/utils/extractors";

export type CabinetAssetItem<T extends AllCurNotationsScope> = {
    id: number;
    curIcon: CurIconPath<T>;
    curName: T;
};

export type CabinetBalanceItem<T extends CabinetAssetItem<AllCurNotationsScope>> = {
    id: number;
    curIcon: ExtractValFromObj<T, "curIcon">;
    curName: ExtractValFromObj<T, "curName">;
    pureAmount: number;
    usdAmount: number;
};
