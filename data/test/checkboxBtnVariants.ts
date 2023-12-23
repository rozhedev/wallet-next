import { TVariantsListItemArr } from "../../components/VariantsList/types";

export const testCheckboxList: TVariantsListItemArr = [
    {
        id: 1,
        type: "checkbox",
        name: "survey-question21",
        answerId: "survey-answer2-1",
        answer: "Bitcoin (BTC)",
    },
    {
        id: 2,
        type: "checkbox",
        name: "survey-question22",
        answerId: "survey-answer2-2",
        answer: "Ethereum",
    },
    {
        id: 3,
        type: "checkbox",
        name: "survey-question23",
        answerId: "survey-answer2-3",
        answer: "Tether",
        disabled: true,
    },
    {
        id: 4,
        type: "checkbox",
        name: "survey-question24",
        answerId: "survey-answer2-4",
        answer: "Binance coin",
        defaultChecked: true,
    },
];
