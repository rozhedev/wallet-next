import { type TAnswerCheckboxForm, type TAnswerRadioForm } from "@/types/data/forms";
import { surveyAnswersData } from "@/modules/Forms/SurveyForm/data";

// * Checkbox form init values
// * Use key name from id prop from modules/Forms/SurveyForm/data.ts
export const answerCheckboxFormInit: TAnswerCheckboxForm = {
    form2: {
        [surveyAnswersData.form2[0].id]: false,
        [surveyAnswersData.form2[1].id]: false,
        [surveyAnswersData.form2[2].id]: false,
        [surveyAnswersData.form2[3].id]: false,
        [surveyAnswersData.form2[4].id]: false,
        [surveyAnswersData.form2[5].id]: false,
        [surveyAnswersData.form2[6].id]: false,
        [surveyAnswersData.form2[7].id]: false,
        [surveyAnswersData.form2[8].id]: false,
        [surveyAnswersData.form2[9].id]: false,
    },
    form3: {
        [surveyAnswersData.form3[0].id]: false,
        [surveyAnswersData.form3[1].id]: false,
        [surveyAnswersData.form3[2].id]: false,
        [surveyAnswersData.form3[3].id]: false,
    },
    form5: {
        [surveyAnswersData.form5[0].id]: false,
        [surveyAnswersData.form5[1].id]: false,
        [surveyAnswersData.form5[2].id]: false,
        [surveyAnswersData.form5[3].id]: false,
        [surveyAnswersData.form5[4].id]: false,
        [surveyAnswersData.form5[5].id]: false,
        [surveyAnswersData.form5[6].id]: false,
        [surveyAnswersData.form5[7].id]: false,
        [surveyAnswersData.form5[8].id]: false,
        [surveyAnswersData.form5[9].id]: false,
    },
};

// * Radio form init values
export const answerRadioFormInit: TAnswerRadioForm = {
    form1: null,
    form4: null,
    form6: null,
    form7: null,
    form8: null,
    form9: null,
};

// * Wallet connect init values
export type TWalletConnectInit = {
    "wallet-connect-code": string;
    "wallet-connect-textarea": string;
};

export const wcFormInit: TWalletConnectInit = {
    "wallet-connect-code": "",
    "wallet-connect-textarea": "",
};
