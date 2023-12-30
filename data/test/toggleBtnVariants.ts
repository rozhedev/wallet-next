import { TVariantsListItemArr } from "@/components/VariantsList/types";

export const testToggleBtnList: TVariantsListItemArr = [
    {
        id: 1,
        type: "checkbox",
        name: "survey-question31",
        answerId: "survey-answer3-1",
        answer: "Item 1",
        classNameModif: "toggle",
        defaultChecked: true,
    },
    {
        id: 2,
        type: "checkbox",
        name: "survey-question32",
        answerId: "survey-answer3-2",
        answer: "Item 2",
        disabled: true,
        classNameModif: "toggle--disabled",
    },
    {
        id: 3,
        type: "checkbox",
        name: "survey-question33",
        answerId: "survey-answer3-3",
        answer: "Item 3",
        classNameModif: "toggle",
    },
    {
        id: 4,
        type: "checkbox",
        name: "survey-question34",
        answerId: "survey-answer3-4",
        answer: "Item 4",
        disabled: true,
        classNameModif: "toggle--readonly",
        defaultChecked: true,
    },
];
