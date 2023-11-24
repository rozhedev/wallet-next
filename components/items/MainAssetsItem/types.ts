import { AllCurNames, TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

// * TMainAssetsItem
export type TMainAssetsItem<TScope extends TAllCurNotesScope, UName extends AllCurNames> = {
    id: `${UName}-tooltip`;
    disabled: boolean;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    title: TScope;
};

export type TMainAssetsItemArr = TMainAssetsItem<TAllCurNotesScope, AllCurNames>[];
