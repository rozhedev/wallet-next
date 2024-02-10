import { TInputListItemArr } from "@/types/data/shared";

export const testToggleBtnList: TInputListItemArr = [
    {
        id: "set-test4-1",
        type: "checkbox",
        name: "set-test4-1",
        label: "Item 1",
        classNameModif: "toggle",
    },
    {
        id: "set-test4-2",
        type: "checkbox",
        name: "set-test4-2",
        label: "Item 2",
        disabled: true,
        classNameModif: "toggle--disabled",
    },
    {
        id: "set-test4-3",
        type: "checkbox",
        name: "set-test4-3",
        label: "Item 3",
        classNameModif: "toggle",
    },
    {
        id: "set-test4-4",
        type: "checkbox",
        name: "set-test4-4",
        label: "Item 4",
        disabled: true,
        classNameModif: "toggle--readonly",
    },
];
