import { InputHTMLAttributes } from "react";

export type TValidInpProps = InputHTMLAttributes<HTMLInputElement> & {
    readonly key?: string | number;
    
    // * set id: any; for prevent error in ValidInp.tsx.
    // id: Path<TRegisterForm> | `confirm-inp.${number}.value`;
    // * ^ this type is not assignable to computed union type from TRegisterForm

    // * Analogously with register
    // register: UseFormRegister<TRegisterForm> | `confirm-inp.${number}.value`;
    // * insted set ↓
    // register: any 

    id: any;
    label?: string;
    register: any;
    required: boolean;
    regex: RegExp;
    regexErrMessage: string;
};
