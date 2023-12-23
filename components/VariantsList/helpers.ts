import { TVariantsListItemArr, TVariantsInpAttr } from "./types";

export const checkUnifiedArr = (arr: TVariantsListItemArr, itemType: TVariantsInpAttr) => arr.every((item) => item.type === itemType);

export const checkToggleArr = (arr: TVariantsListItemArr, prop: "classNameModif" | "defaultChecked") => arr.every((item) => item.hasOwnProperty(prop));
