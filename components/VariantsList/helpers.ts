import { VariantsListItemArr, VariantsInpAttr } from "./types";

export const checkUnifiedArr = (arr: VariantsListItemArr, itemType: VariantsInpAttr) => {
    return arr.every((item) => item.type === itemType);
};
