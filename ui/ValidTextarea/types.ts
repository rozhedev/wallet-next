import { TextareaHTMLAttributes } from "react";

export type TValidTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    readonly key?: string | number;
    id: string;
    label?: string;
    required?: boolean;
    register: any;
    regex: RegExp;
    regexErrMessage: string;
};
