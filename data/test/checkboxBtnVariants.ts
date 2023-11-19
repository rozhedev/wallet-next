import { VariantsListItemArr } from "../../components/VariantsList/types";

export const testCheckboxList: VariantsListItemArr = [
    {
        id: 1,
        type: "checkbox",
        nameAttr: "survey-question21",
        answerId: "survey-answer2-1",
        answer: "Bitcoin (BTC)",
    },
    {
        id: 2,
        type: "checkbox",
        nameAttr: "survey-question22",
        answerId: "survey-answer2-2",
        answer: "Ethereum",
    },
    {
        id: 3,
        type: "checkbox",
        nameAttr: "survey-question23",
        answerId: "survey-answer2-3",
        answer: "Tether",
        disabled: true,
    },
    {
        id: 4,
        type: "checkbox",
        nameAttr: "survey-question24",
        answerId: "survey-answer2-4",
        answer: "Binance coin",
        defaultChecked: true,
    },
];
