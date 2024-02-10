import { AllCurFullNames } from "@/types/data/currencies";
import { TInputListItemArr } from "@/types/data/shared";

export const testCheckboxList: TInputListItemArr = [
    {
        id: "set-test2-1",
        type: "checkbox",
        name: "set-test2-1",
        label: AllCurFullNames.bitcoin,
    },
    {
        id: "set-test2-2",
        type: "checkbox",
        name: "set-test2-2",
        label: AllCurFullNames.ethereum,
    },
    {
        id: "set-test2-3",
        type: "checkbox",
        name: "set-test2-3",
        label: AllCurFullNames.tether,
        disabled: true,
    },
    {
        id: "set-test2-4",
        type: "checkbox",
        name: "set-test2-4",
        label: AllCurFullNames.binanceCoin,
        defaultChecked: true,
    },
];
