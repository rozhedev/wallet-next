import { TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

// * TMainAssetsItem
export type TMainAssetsItem<TScope extends TAllCurNotesScope> = {
    id: `${TScope}-tooltip`;
    disabled: boolean;
    imgPath: TCurIconPath<TAllCurNotesScope>;
    imgAlt: TScope;
    title: TScope;
};

export type TMainAssetsItemArr = TMainAssetsItem<TAllCurNotesScope>[];
