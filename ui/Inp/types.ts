import { InputHTMLAttributes } from "react";

export type TInpProps = InputHTMLAttributes<HTMLInputElement> & {
    readonly key?: string | number;
};
