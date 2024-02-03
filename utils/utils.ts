import { UseFormGetValues } from "react-hook-form";

export const getPassphraseStr = (getFunc: UseFormGetValues<any>, inpFields: string) =>
    getFunc(inpFields)
        .map((inp: { value: string }) => (inp.value = inp.value.trim()))
        .join(" ");

export const checkScreenWidth = (bp: number) => {
    let bool: boolean;
    if (typeof document !== "undefined" && document.documentElement.clientWidth < bp) bool = true;
    else bool = false;
    return bool;
};

export const getRandomNumber = (min: number, max: number) => {
    let temp: number = min + Math.random() * (max - min);
    return temp;
};

// * Predicate for futute survey forms
// TODO Survey Forms validation

export const checkSurveyRadioFieldset = (obj: Object, condValue: boolean | null) => {
    let bool: boolean;
    if (Object.values(obj).every((prop) => prop !== condValue)) bool = true;
    else bool = false;
    return bool;
};

export const checkSurveyCheckboxFieldset = (obj: Object, condValue: boolean | null) => {
    let bool: boolean;
    if (Object.values(obj).some((prop) => prop !== condValue)) bool = true;
    else bool = false;
    return bool;
};
