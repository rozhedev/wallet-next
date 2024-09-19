export type TRegisterForm = {
    "register-username": string;
    "register-email": string;
    "register-checkbox": boolean;
    "pass-checkbox": boolean;
    // * ["passphrase-inp"].lenght  = 12
    // * Usage HomogeneousTuple сauses an error on register function
    "passphrase-inp": { value: string }[];
    "confirm-inp": string;
};

export type TSigninForm = {
    "signin-email": string;
    "signin-pass": string;
};

export type TAnswerCheckboxForm = Record<"form2" | "form3" | "form5", { [key: string]: boolean }>;

export type TAnswerRadioForm = Record<"form1" | "form4" | "form6" | "form7" | "form8" | "form9", string | null>;
