import { AllCurNames, TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

// * TMainAssetsItem
export type TMainRateItem<TScope extends TAllCurNotesScope, UName extends AllCurNames> = {
    id: `main-${UName}-rate`;
    title: TScope;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    rate: `$${string}`;
    rateId: `main-${AllCurNames}-output`;
    isIncreased: boolean;
};

export type TMainRateItemArr = TMainRateItem<TAllCurNotesScope, AllCurNames>[];
