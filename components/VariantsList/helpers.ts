import { VariantsListItemArr, VariantsInpAttr } from "./types";
import { ToggleModifClassNames } from "@/ui/Toggle/types";

export const checkUnifiedArr = (arr: VariantsListItemArr, itemType: VariantsInpAttr) => arr.every((item) => item.type === itemType);

export const checkToggleArr = (arr: VariantsListItemArr, prop: "classNameModif" | "defaultChecked") => arr.every((item) => item.hasOwnProperty(prop));