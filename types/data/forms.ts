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