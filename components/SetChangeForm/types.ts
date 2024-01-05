import { HTMLInputTypeAttribute } from "react";

export type TSetChangeFormProps = {
    formId: string;
    inpType: HTMLInputTypeAttribute;
    inpId: string;
    placeholder: string;
    minLength: number;
    maxLength: number;
    label: string;
};
