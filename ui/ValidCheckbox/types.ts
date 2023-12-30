import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { TRegisterForm, TSigninForm } from "@/types/data/forms";

export type TValidCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    defaultChecked?: boolean;
    id: Path<TRegisterForm>;
    register: UseFormRegister<TRegisterForm>;
    required: boolean;
};
