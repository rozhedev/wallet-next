import { AllCurFullNames } from "@/types/data/currencies";

export type TSurveyFinishProps = {
    curName: AllCurFullNames | "";
    amount: number;
    minutesCount: number;
};
