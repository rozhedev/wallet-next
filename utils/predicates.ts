export const isWindowUndefined = () => {
    let bool: boolean;
    typeof window !== "undefined" ? (bool = true) : (bool = false);
    return bool;
};

export const checkScreenWidth = (bp: number) => {
    let bool: boolean;
    if (typeof document !== "undefined" && document.documentElement.clientWidth < bp) bool = true;
    else bool = false;
    return bool;
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
