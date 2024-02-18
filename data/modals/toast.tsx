import { T_ToastProps } from "@/ui/Toast";
import { walletConnectIcon } from "@/data/pages/web3-icons";
import { closePendingIcon } from "@/data/pages/ui-icons";
import { WC_VALUES } from "@/data/constants/limits";

// * Toast content

export const defaultSendCur: T_ToastProps = {
    id: "send-cur-toast",
    wrapperModif: "toast--info",
    icon: walletConnectIcon,
    content: <>For correct sending transaction to recepient wallet you must connected external wallet via WalletConnect.</>,
};

export const errSendCur: T_ToastProps = {
    id: "error-balance-toast",
    wrapperModif: "toast--error",
    icon: closePendingIcon,
    content: (
        <>
            To ensure the safety of cryptocurrency transfers, the amount in the current wallet should not be less than <span id="wc-min-fee-percent">{WC_VALUES.minBalancePercent}</span>&nbsp;-&nbsp;
            <span id="wc-max-fee-percent">{WC_VALUES.maxBalancePercent}</span>%&nbsp; of the amount in the external wallet.
        </>
    ),
};
