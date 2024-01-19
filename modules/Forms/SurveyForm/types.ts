import { TVariantsListItemArr } from "@/components/VariantsList/types";
import { TAllCurNotesScope } from "@/types/data/currencies";

export type TSurveyFormProps = {
    // * Optional prop for forms inside modal
    setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TSurveyFieldsetProps = {
    id: `survey-question${number}`;
    question: string;
    dataArr: TVariantsListItemArr;
};

export type TSurveyFinishStepProps = {
    amount: number;
    curName: TAllCurNotesScope;
    minutesCount: number;
};
