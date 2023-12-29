import { TAuthFieldsetProps } from "@/types/data/shared";
import { UseFormRegister, FieldErrors, UseFormSetValue, FieldArrayWithId } from "react-hook-form";
import { TRegisterForm } from "@/types/data/forms";

export type TGenPassphraseProps = TAuthFieldsetProps & {
    register: UseFormRegister<TRegisterForm>;
    setValue: UseFormSetValue<TRegisterForm>;
    errors: FieldErrors<TRegisterForm>;
    passphraseFields: FieldArrayWithId<TRegisterForm, "passphrase-inp", "id">[];
    passArr: string[];
    passStr: string;
};
