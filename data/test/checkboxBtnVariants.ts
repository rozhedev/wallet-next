import { TVariantsListItemArr } from "@/components/VariantsList/types";

export const testCheckboxList: TVariantsListItemArr = [
    {
        id: "survey-answer2-1",
        type: "checkbox",
        name: "survey-question21",
        label: "Bitcoin (BTC)",
    },
    {
        id: "survey-answer2-2",
        type: "checkbox",
        name: "survey-question22",
        label: "Ethereum",
    },
    {
        id: "survey-answer2-3",
        type: "checkbox",
        name: "survey-question23",
        label: "Tether",
        disabled: true,
    },
    {
        id: "survey-answer2-4",
        type: "checkbox",
        name: "survey-question24",
        label: "Binance coin",
        defaultChecked: true,
    },
];
