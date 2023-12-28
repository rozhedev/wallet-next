import { usePassphrase } from "@/modules/Forms/GenPassphrase";
import { bip39 } from "@/data/constants/bip39";

export const INP_DATA = {
    registerUsername: {
        // * Title value maybe used as label
        title: "Username",
        placeholder: "Username",
        regex: /^[a-z0-9_-]{4,15}$/,
        errorsText: {
            required: "Username is required",
            pattern: "Enter a valid username",
        },
    },
    registerEmail: {
        // * Title value maybe used as label
        title: "Email",
        placeholder: "Email",
        regex: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        errorsText: {
            required: "Email is required",
            pattern: "Enter a valid email",
        },
    },
    registerCheckboxErrText: "You must agree with terms",
    passCheckboxErrText: "Confirm saved passphrase",
    passMatchErrText: "Passphrases not match",
};

export const REGISTER_INIT_VALUES = {
    "register-username": "",
    "register-email": "",
    "register-checkbox": false,
    "pass-checkbox": false,
    "passphrase-inp": [
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
    ],
    "confirm-inp": [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
};

export const { passArr, passStr } = usePassphrase(bip39);

REGISTER_INIT_VALUES["passphrase-inp"].map((pass, i) => (pass.value = passArr[i]));
