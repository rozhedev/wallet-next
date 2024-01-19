import { TVariantsListItemArr } from "@/components/VariantsList/types";

export type TSurveyFormProps = {    
};

export type TSurveyFieldsetProps = {
    id: `survey-question${number}`;
    question: string;
    dataArr: TVariantsListItemArr;
}