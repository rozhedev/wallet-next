import { AllCurNames, TAllCurNotesScope } from "@/types/data/currencies";
import { TCurIconPath } from "@/types/data/shared";

export type TStoreAssetsItem<TCurScope extends TAllCurNotesScope> = {
    id: AllCurNames;
    curIconPath: TCurIconPath<TCurScope>;
    curIconAlt: TCurScope;
    curName: TCurScope;
};
