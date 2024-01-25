import { TVariantsListItemArr } from "@/components/VariantsList/types";

export const testToggleBtnList: TVariantsListItemArr = [
    {
        id: "survey-answer3-1",
        type: "checkbox",
        name: "survey-answer3-1",
        label: "Item 1",
        classNameModif: "toggle",
    },
    {
        id: "survey-answer3-2",
        type: "checkbox",
        name: "survey-answer3-2",
        label: "Item 2",
        disabled: true,
        classNameModif: "toggle--disabled",
    },
    {
        id: "survey-answer3-3",
        type: "checkbox",
        name: "survey-answer3-3",
        label: "Item 3",
        classNameModif: "toggle",
    },
    {
        id: "survey-answer3-4",
        type: "checkbox",
        name: "survey-answer3-4",
        label: "Item 4",
        disabled: true,
        classNameModif: "toggle--readonly",
    },
];
