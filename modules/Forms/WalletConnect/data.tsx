import { checkPendingIcon, checkedRoundedIcon, provideIcon } from "@/data/pages/ui-icons";
import { TWCFieldset } from "./types";

export const wcModalData: Record<"info" | "success" | "error", TWCFieldset> = {
    info: {
        id: "modal-form-connect-promo",
        icon: provideIcon,
        content: <p>Already have a cryptocurrency wallet? Connect it via WalletConnect to the Flem ecosystem, for easier and clearer use.</p>,
    },
    success: {
        id: "modal-form-connect-success",
        icon: checkPendingIcon,
        content: (
            <>
                <p>
                    Wallet in the process of verification. The external wallet will be available in <span id="wc-min-waiting-time">20</span> - <span id="wc-max-waiting-time">40</span> minutes,
                    depending on network load.
                </p>
                <p>A message about successful connection will be displayed in the transaction history.</p>
            </>
        ),
    },
    error: {
        id: "modal-form-connect-error",
        icon: checkedRoundedIcon,
        content: (
            <>
                <p>
                    <span className="navlink">Insufficient output error.</span>
                    <br />
                    There are not enough funds on the external wallet to pay the network fee.
                </p>
                <p>
                    To ensure the safety of cryptocurrency transfers between wallets, the amount in the first wallet should not be less than <span id="min-fee-percent">25</span> -{" "}
                    <span id="max-fee-percent">35%</span> of the amount in the second wallet.
                </p>
            </>
        ),
    },
};
