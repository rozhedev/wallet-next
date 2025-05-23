import { AllCurShortNames, TAllCurNotesScope } from "@/types/data/currencies";
import { TCurIconPath } from "@/types/data/shared";

// * TMainAssetsItem
export type TMainAssetsItem<TScope extends TAllCurNotesScope, UName extends AllCurShortNames> = {
    id: `${UName}-tooltip`;
    disabled: boolean;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    title: TScope;
};

export type TMainAssetsItemArr = TMainAssetsItem<TAllCurNotesScope, AllCurShortNames>[];
