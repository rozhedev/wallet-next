import { T_ToggleModifClassNames } from "@/ui/Toggle/types";

export type TVariantsInpAttr = "radio" | "checkbox";

type TVariantsListItem = {
    id: number;
    type: TVariantsInpAttr;
    name: `survey-question${number}`;
    answerId: `survey-answer${number}-${number}`;
    answer: string;
    disabled?: boolean;
    classNameModif?: T_ToggleModifClassNames;
    defaultChecked?: boolean;
};
export type TVariantsListItemArr = TVariantsListItem[];

export type VariantsListItemProps = {
    dataArr: TVariantsListItemArr;
};
