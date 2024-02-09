import { usePassphrase } from "@/modules/Forms/GenPassphrase";
import { bip39 } from "@/data/constants/bip39";
import { PASSPHRASE_LENGTH } from "../constants/limits";

export const AUTH_INP_DATA = {
    registerUsername: {
        // * Title value maybe used as label
        title: "Username",
        placeholder: "Username",
        regex: /^[a-z0-9_-]{4,15}$/,
        errorsText: {
            required: "Username is required",
            pattern: "Username can only consist of letters & numbers",
        },
    },
    registerEmail: {
        // * Title value maybe used as label
        title: "Email",
        placeholder: "Email",
        regex: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        errorsText: {
            required: "Email is required",
            pattern: "Please, enter correct email",
        },
    },
    registerCheckboxErrText: "You must agree with terms",
    passCheckboxErrText: "Confirm saved passphrase",
    passMatchErrText: 'Passphrases not match. Check words and click "Complete" button again',
    signinErrText: 'Invalid passphrase. Check words and click "Signin" button again',
    fieldArrValues: {
        passphrase: {
            id: "passphrase-inp",
            title: "Passphrase word",
        },
        confirm: {
            id: "confirm-inp",
            title: "Confirm input",
        },
        signin: {
            id: "signin-inp",
            title: "Signin input",
        },
        wordMinLenght: 3,
        wordMaxLenght: 11,
    },
};

export const SEND_CUR_INP_DATA = {
    walletAddress: {
        id: "send-cur-wallet-address",
        title: "Wallet address",
        placeholder: "Wallet address",
        min: 42,
        max: 42,
    },
    amount: {
        id: "send-cur-amount",
        title: "Amount",
        placeholder: "Amount",
        min: 0,
        max: 999999999999,
        balanceErr: "Not enough funds on the balance",
        zeroErr: "Amount cannot equal zero",
    },
    networkFee: {
        id: "send-cur-network-fee",
        title: "Network fee",
        placeholder: "Network fee",
    },
};

export const PASSPHRASE_DATA = {
    title: "Enter passphrase",
    // * PASSPHRASE_LENGTH = 12
    placeholder: "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12",
    regex: /^\s*([a-z]{3,11}\s*){12}$/g,
    requiredErrMessage: "This field is required",
    regexErrMessage: `Invalid passphrase. Pass lenght = ${PASSPHRASE_LENGTH}`,
    rowsCount: 3,
};

// * Initial form values
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
    "confirm-inp": "",
};

export const { passArr, passStr } = usePassphrase(bip39);

REGISTER_INIT_VALUES["passphrase-inp"].map((pass, i) => (pass.value = passArr[i]));

export const SIGNIN_INIT_VALUES = {
    "signin-inp": [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
};

export const SEND_CUR_INIT_VALUES = {
    walletAddress: "",
    amount: "",
    networkFee: "",
};
