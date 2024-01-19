import { T_ToggleModifClassNames } from "@/ui/Toggle/types";

export type TVariantsInpAttr = "radio" | "checkbox";

type TVariantsListItem = {
    id: `survey-${string}` | `set-${string}`;
    type: TVariantsInpAttr;
    name: `survey-question${number}` | `set-${string}`;
    label: string;
    disabled?: boolean;
    classNameModif?: T_ToggleModifClassNames;
    defaultChecked?: boolean;
};
export type TVariantsListItemArr = TVariantsListItem[];

export type VariantsListItemProps = {
    dataArr: TVariantsListItemArr;
};
