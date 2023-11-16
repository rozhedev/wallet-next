export type VariantsInpAttr = "radio" | "checkbox";

export type VariantsListItem = {
    id: number;
    type: VariantsInpAttr;
    nameAttr: `survey-question${number}`;
    answerId: `survey-answer${number}-${number}`;
    answer: string;
    disabled: boolean;
};

export type VariantsListItemArr = VariantsListItem[];

export type VariantsListItemProps = {
    dataArr: VariantsListItemArr;
};
