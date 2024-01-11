import { AllCurNames, TAllCurNotesScope } from "@/types/data/currencies";
import { TCurIconPath } from "@/types/data/shared";

type TIconsConfigItem<TScope extends TAllCurNotesScope> = {
    id: number;
    // * curName need for correct icon manage
    curName: TScope;
    sendPC: boolean;
    receivePC: boolean;
    sendPhone: boolean;
    receivePhone: boolean;
    exchange: boolean;
    buy: boolean;
    stacking: boolean;
};

type TIconsConfigItemPure = Omit<TIconsConfigItem<TAllCurNotesScope>, "id" | "curName">;

export type TAssetsTableItem<TScope extends TAllCurNotesScope> = {
    id: `assets-table-item-${AllCurNames}`;
    // * Order is additional prop for correct work with backend
    order: number;
    curIconPath: TCurIconPath<TAllCurNotesScope>;
    curIconAlt: TScope;
    curName: TScope;
    iconPaths: TIconsConfigItemPure;
};

export type TAssetsTableItemArr = TAssetsTableItem<TAllCurNotesScope>[];
