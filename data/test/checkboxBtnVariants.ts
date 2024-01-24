import { TVariantsListItemArr } from "@/components/VariantsList/types";

export const testCheckboxList: TVariantsListItemArr = [
    {
        id: "survey-answer2-1",
        type: "checkbox",
        name: "survey-answer2-1",
        label: "Bitcoin (BTC)",
    },
    {
        id: "survey-answer2-2",
        type: "checkbox",
        name: "survey-answer2-2",
        label: "Ethereum",
    },
    {
        id: "survey-answer2-3",
        type: "checkbox",
        name: "survey-answer2-3",
        label: "Tether",
        disabled: true,
    },
    {
        id: "survey-answer2-4",
        type: "checkbox",
        name: "survey-answer2-4",
        label: "Binance coin",
        defaultChecked: true,
    },
];
