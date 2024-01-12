import { TextareaHTMLAttributes } from "react";

export type T_TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    readonly key?: string | number;
    id: string;
    label?: string;
    required?: boolean;
};
