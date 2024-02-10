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
    "signin-inp": string;
}

export type TAnswerCheckboxForm = {
    form2: {
        [key: string]: boolean;
    };
    form3: {
        [key: string]: boolean;
    };
    form5: {
        [key: string]: boolean;
    };
};

export type TAnswerRadioForm = Record<"form1" | "form4" | "form6" | "form7" | "form8" | "form9", string | null>;