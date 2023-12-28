import { UseFormRegister, Control, UseFormHandleSubmit, FieldErrors, UseFormSetValue, UseFormGetValues, UseFormReset } from "react-hook-form";
import { TRegisterForm } from "@/types/data/forms";

export type TMultistep = {
    register: UseFormRegister<TRegisterForm>;
    control: Control<TRegisterForm, any>;
    handleSubmit:  UseFormHandleSubmit<TRegisterForm, undefined>;
    errors: FieldErrors<TRegisterForm>;
    isSubmitting: boolean;
    setValue: UseFormSetValue<TRegisterForm>;
    getValues: UseFormGetValues<TRegisterForm>;
    reset: UseFormReset<TRegisterForm>;
    passArr: string[];
    passStr: string;
};
