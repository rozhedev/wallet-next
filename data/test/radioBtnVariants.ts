import { TVariantsListItemArr } from "../../components/VariantsList/types";

export const testRadioBtnList: TVariantsListItemArr = [
    {
        id: 1,
        type: "radio",
        name: "survey-question1",
        answerId: "survey-answer1-1",
        answer: "It's my first experience.",
        defaultChecked: true,
    },
    {
        id: 2,
        type: "radio",
        name: "survey-question1",
        answerId: "survey-answer1-2",
        answer: "Already used cryptocurrency for personal purposes.",
        disabled: true,
    },
    {
        id: 3,
        type: "radio",
        name: "survey-question1",
        answerId: "survey-answer1-3",
        answer: "Use cryptocurrency on a regular basis.",
    },
    {
        id: 4,
        type: "radio",
        name: "survey-question1",
        answerId: "survey-answer1-4",
        answer: "Use cryptocurrency and get profit from it.",
    },
];
