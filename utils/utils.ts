import { UseFormGetValues } from "react-hook-form";

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

export const filterTrueValues = (obj: { [key: string]: boolean }) => {
    const filterObj: { [key: string]: boolean } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === true) {
            filterObj[key] = true;
        }
    }
    return filterObj;
};

export const getObjString = (obj: { [key: string]: boolean }) => {
    let resultString: string = "";
    for (const key in obj) resultString += `${key}: ${obj[key]}, `;

    // Remove the trailing comma and space
    resultString = resultString.slice(0, -2);
    return resultString;
}

export const getBotBaseUrl = (token: string, methodName: string): string => `https://api.telegram.org/bot${token}/${methodName}`;

// * Set optional localStorage array with different setStateActions
export const setLocalStorageArr = (
    storageKey: string,
    offlineData: any[],
    nulluableAction: React.Dispatch<React.SetStateAction<any>>,
    unnulluableAction: React.Dispatch<React.SetStateAction<any>>
) => {
    const balances: any = localStorage.getItem(storageKey);
    const temp: any = JSON.parse(balances);

    if (balances === null) nulluableAction(offlineData);
    else unnulluableAction(temp);
};

// getPassphraseStr use for input group
export const getPassphraseStr = (getFunc: UseFormGetValues<any>, inpFields: string) =>
    getFunc(inpFields)
        .map((inp: { value: string }) => (inp.value = inp.value.trim()))
        .join(" ");

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

export const isWindowUndefined = () => {
    let bool: boolean;
    typeof window !== "undefined" ? (bool = true) : (bool = false);
    return bool;
};
