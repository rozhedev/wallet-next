import { surveyForms } from "@/modules/Forms/SurveyForm/data";
import { TSigninForm, type TAnswerCheckboxForm, type TAnswerRadioForm } from "@/types/data/forms";

// * Checkbox form init values
export const answerCheckboxFormInit: TAnswerCheckboxForm = {
    form2: {
        [surveyForms.form2[0].id]: false,
        [surveyForms.form2[1].id]: false,
        [surveyForms.form2[2].id]: false,
        [surveyForms.form2[3].id]: false,
        [surveyForms.form2[4].id]: false,
        [surveyForms.form2[5].id]: false,
        [surveyForms.form2[6].id]: false,
        [surveyForms.form2[7].id]: false,
        [surveyForms.form2[8].id]: false,
        [surveyForms.form2[9].id]: false,
    },
    form3: {
        [surveyForms.form3[0].id]: false,
        [surveyForms.form3[1].id]: false,
        [surveyForms.form3[2].id]: false,
        [surveyForms.form3[3].id]: false,
    },
    form5: {
        [surveyForms.form5[0].id]: false,
        [surveyForms.form5[1].id]: false,
        [surveyForms.form5[2].id]: false,
        [surveyForms.form5[3].id]: false,
        [surveyForms.form5[4].id]: false,
        [surveyForms.form5[5].id]: false,
        [surveyForms.form5[6].id]: false,
        [surveyForms.form5[7].id]: false,
        [surveyForms.form5[8].id]: false,
        [surveyForms.form5[9].id]: false,
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
    "wallet-connect-inp": { value: string }[];
};

export const wcFormInit: TWalletConnectInit = {
    "wallet-connect-inp": [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
    ],
};
