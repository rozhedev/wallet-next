import { TWCFieldset } from "./types";
import { WC_VALUES } from "@/data/constants/limits";
import { errSendCur } from "@/data/modals/toast";
import { checkPendingIcon, provideIcon } from "@/data/pages/ui-icons";

export const wcModalData: Record<"info" | "success", TWCFieldset> = {
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
                    Wallet in the process of verification. The current wallet will be available in <span id="wc-min-waiting-time">{WC_VALUES.minWaitingTime}</span> -{" "}
                    <span id="wc-max-waiting-time">{WC_VALUES.maxWaitingTime}</span> minutes, depending on network load.
                </p>
                {/* <p>There are not enough funds on the external wallet to pay the network fee.</p> */}
                <p>{errSendCur.content}</p>
                {/* <p>A message about successful connection will be displayed in the transaction history.</p> */}
            </>
        ),
    },
};
