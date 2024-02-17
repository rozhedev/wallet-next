import { RequiredPick } from "@/types/utils/utils";

import type { TModalProps } from "@/ui/Modal/index";
import { checkedRoundedIcon, closeRoundedIcon, exportIcon, importIcon } from "@/data/pages/ui-icons";

type TModalData = {
    id: RequiredPick<TModalProps, "modalId">;
    modalDialogClassName: RequiredPick<TModalProps, "modalDialogClassName">;
    titleIcon: React.ReactElement;
    title: string;
    content: React.ReactNode | string | string[];
};

type TPromoModalData = Record<"success" | "error", TModalData>;

// * All modal data
// * promo - promoactions
export const promoModalData: TPromoModalData = {
    success: {
        id: "modal-promoaction-success",
        modalDialogClassName: "modal-dialog modal-dialog--success",
        titleIcon: checkedRoundedIcon,
        title: "Signed to airdrop",
        content: (
            <p>
                To participate in the airdrop you need to go through the registration procedure. If you are already registered, log into your wallet as always and go to the &quot;Survey&quot; section.
            </p>
        ),
    },
    error: {
        id: "modal-promoaction-error",
        modalDialogClassName: "modal-dialog modal-dialog--error",
        titleIcon: closeRoundedIcon,
        title: "Event expired",
        content: <p>This event is over. Stay tuned so you don&apos;t miss any new promotions.</p>,
    },
};

export const settingsModalData: TModalData = {
    id: "modal-change-form-success",
    modalDialogClassName: "modal-dialog modal-dialog--success",
    titleIcon: checkedRoundedIcon,
    title: "Request sent",
    content: <p>Your data change request has been sent. The changes will be displayed within 15 minutes</p>,
};

type TAssetsCabModalData = Record<"send" | "get", Omit<TModalData, "id" | "content">>;
export const assetsCabModalData: TAssetsCabModalData = {
    send: {
        modalDialogClassName: "modal-dialog modal-dialog--info modal-dialog--send",
        titleIcon: exportIcon,
        title: "Send cryptocurrency",
    },
    get: {
        modalDialogClassName: "modal-dialog modal-dialog--info modal-dialog--get",
        titleIcon: importIcon,
        title: "Get cryptocurrency",
    },
};
