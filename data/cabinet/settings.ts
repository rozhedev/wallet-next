import { type TInputListItemArr } from "@/types/data/shared";

export const settingsToggleList: TInputListItemArr = [
    {
        id: "set-hide-balance-signin",
        type: "checkbox",
        name: "set-hide-balance-signin",
        label: "Hide balance when signing into the wallet",
        classNameModif: "toggle",
    },
    {
        id: "set-send-confirm",
        type: "checkbox",
        name: "set-send-confirm",
        label: "Confirmation before sending cryptocurrency",
        classNameModif: "toggle",
    },
    {
        id: "set-exchange-confirm",
        type: "checkbox",
        name: "set-exchange-confirm",
        label: "Confirmation before exchanging cryptocurrency",
        classNameModif: "toggle",
    },
    {
        id: "set-signin-same-ip",
        type: "checkbox",
        name: "set-signin-same-ip",
        label: "Allow signing to wallet ONLY if IP address is the same",
        classNameModif: "toggle",
    },
    {
        id: "set-signature-username",
        type: "checkbox",
        name: "set-signature-username",
        label: "Use username as a signature for a transaction",
        classNameModif: "toggle",
    },
    {
        id: "set-hide-site-navigation",
        type: "checkbox",
        name: "set-hide-site-navigation",
        label: 'Hide "Site navigation" widget from dashboard',
        classNameModif: "toggle",
    },
    {
        id: "set-hide-external-links",
        type: "checkbox",
        name: "set-hide-external-links",
        label: 'Hide "External Links" widget',
        classNameModif: "toggle",
    },
    {
        id: "set-dark-mode",
        type: "checkbox",
        name: "set-dark-mode",
        label: "Dark mode (Coming soon)",
        classNameModif: "toggle--disabled",
        disabled: true,
    },
];
