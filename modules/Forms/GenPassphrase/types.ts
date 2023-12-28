import { UseFormRegister, Control, FieldErrors, UseFormSetValue } from "react-hook-form";
import { TAuthFieldsetProps } from "@/types/data/shared";
import { TRegisterForm } from "@/types/data/forms";

export type TGenPassphraseProps = TAuthFieldsetProps & {
    register: UseFormRegister<TRegisterForm>;
    setValue: UseFormSetValue<TRegisterForm>
    control: Control<TRegisterForm, any>;
    errors: FieldErrors<TRegisterForm>;
    passArr: string[];
    passStr: string;
};