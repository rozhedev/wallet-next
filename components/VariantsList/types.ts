import { ToggleModifClassNames } from "@/ui/Toggle/types";

export type VariantsInpAttr = "radio" | "checkbox";

type VariantsListItem = {
    id: number;
    type: VariantsInpAttr;
    nameAttr: `survey-question${number}`;
    answerId: `survey-answer${number}-${number}`;
    answer: string;
    disabled?: boolean;
    classNameModif?: ToggleModifClassNames;
    defaultChecked?: boolean;
};
export type VariantsListItemArr = VariantsListItem[];

export type VariantsListItemProps = {
    dataArr: VariantsListItemArr;
};
