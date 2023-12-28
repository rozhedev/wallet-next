import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { TRegisterForm } from "@/types/data/forms";

export type TInpProps = InputHTMLAttributes<HTMLInputElement> & {
    readonly key?: string | number;
    
    // * set id: any; for prevent error in Inp.tsx.
    // id: Path<TRegisterForm> | `confirm-inp.${number}.value`;
    // * ^ this type is not assignable to computed union type from TRegisterForm

    id: Path<TRegisterForm> | `confirm-inp.${number}.value`;
    register: UseFormRegister<TRegisterForm>;
    required: boolean;
    regex: RegExp;
    regexErrMessage: string;
};
