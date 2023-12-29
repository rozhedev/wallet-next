import { UseFormGetValues } from "react-hook-form";

export const getPassphraseStr = (getFunc: UseFormGetValues<any>, inpFields: string) =>
    getFunc(inpFields)
        .map((inp: { value: string }) => (inp.value = inp.value.trim()))
        .join(" ");
