import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { TRegisterForm, TSigninForm } from "@/types/data/forms";

export type TCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    defaultChecked?: boolean;
    id: Path<TRegisterForm> | Path<TSigninForm>;
    register: UseFormRegister<TRegisterForm>  | UseFormRegister<TSigninForm>;
    required: boolean;
};
