import { TVariantsListItemArr } from "@/components/VariantsList/types";

export const settingsToggleList: TVariantsListItemArr = [
    {
        id: "set-hide-balance-signin",
        type: "checkbox",
        name: "set-toggle",
        label: "Hide balance when signing into the wallet",
        classNameModif: "toggle",
    },
    {
        id: "set-send-confirm",
        type: "checkbox",
        name: "set-toggle",
        label: "Сonfirmation before sending cryptocurrency",
        classNameModif: "toggle",
    },
    {
        id: "set-exchange-confirm",
        type: "checkbox",
        name: "set-toggle",
        label: "Сonfirmation before exchanging cryptocurrency",
        classNameModif: "toggle",
    },
    {
        id: "set-signin-same-ip",
        type: "checkbox",
        name: "set-toggle",
        label: "Allow signing to wallet ONLY if IP address is the same",
        classNameModif: "toggle",
    },
    {
        id: "set-signature-username",
        type: "checkbox",
        name: "set-toggle",
        label: "Use username as a signature for a transaction",
        classNameModif: "toggle",
    },
    {
        id: "set-dashboard-remove-btn-delete",
        type: "checkbox",
        name: "set-toggle",
        label: "Hide \"Site navigation\" widget from dashboard",
        classNameModif: "toggle",
    },
    {
        id: "set-hide-external-links",
        type: "checkbox",
        name: "set-toggle",
        label: "Hide \"External Links\" widget",
        classNameModif: "toggle",
    },
    {
        id: "set-dark-mode",
        type: "checkbox",
        name: "set-toggle",
        label: "Dark mode (Coming soon)",
        classNameModif: "toggle--disabled",
        disabled: true,
    },
];
