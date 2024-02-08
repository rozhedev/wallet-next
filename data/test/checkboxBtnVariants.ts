import { AllCurFullNames } from "@/types/data/currencies";
import { TInputListItemArr } from "@/types/data/shared";

export const testCheckboxList: TInputListItemArr = [
    {
        id: "survey-answer2-1",
        type: "checkbox",
        name: "survey-answer2-1",
        label: AllCurFullNames.bitcoin,
    },
    {
        id: "survey-answer2-2",
        type: "checkbox",
        name: "survey-answer2-2",
        label: AllCurFullNames.ethereum,
    },
    {
        id: "survey-answer2-3",
        type: "checkbox",
        name: "survey-answer2-3",
        label: AllCurFullNames.tether,
        disabled: true,
    },
    {
        id: "survey-answer2-4",
        type: "checkbox",
        name: "survey-answer2-4",
        label: AllCurFullNames.binanceCoin,
        defaultChecked: true,
    },
];
