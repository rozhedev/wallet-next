export type TRegisterForm = {
    "register-username": string;
    "register-email": string;
    "register-checkbox": boolean;
    "pass-checkbox": boolean;
    // * ["confirm-inp"].lenght & ["passphrase-inp"].lenght  = 12
    // * Usage HomogeneousTuple сauses an error on register function
    "confirm-inp": { value: string }[];
    "passphrase-inp": { value: string }[];
};

export type TSigninForm = {
    "signin-inp": { value: string }[];
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