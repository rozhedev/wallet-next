import { VariantsListItemProps } from "@/components/VariantsList/types";

export type TSurveyFieldsetProps = VariantsListItemProps & {
    id: `survey-form${number}`;
    question: string;
};
