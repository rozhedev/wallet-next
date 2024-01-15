import { RequiredPick } from "@/types/utils/utils";
import { MODAL_ICONS, type TModalIcons } from "./title-icons";

import type { TModalProps } from "@/ui/Modal/index";

type TModalData = {
    id: RequiredPick<TModalProps, "modalId">;
    modalDialogClassName: RequiredPick<TModalProps, "modalDialogClassName">;
    titleIcon:
        | RequiredPick<TModalIcons, "success">
        | RequiredPick<TModalIcons, "error">
        | RequiredPick<TModalIcons, "walletConnect">
        | RequiredPick<TModalIcons, "get">
        | RequiredPick<TModalIcons, "send">
        | RequiredPick<TModalIcons, "survey">;
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
        titleIcon: MODAL_ICONS.success,
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
        titleIcon: MODAL_ICONS.error,
        title: "Event expired",
        content: <p>This event is over. Stay tuned so you don&apos;t miss any new promotions.</p>,
    },
};

export const settingsModalData: TModalData = {
    id: "modal-change-form-success",
    modalDialogClassName: "modal-dialog modal-dialog--success",
    titleIcon: MODAL_ICONS.success,
    title: "Request sent",
    content: <p>Your data change request has been sent. The changes will be displayed within 15 minutes</p>,
};

type TAssetsCabModalData = Record<"send" | "get", Omit<TModalData, "id" | "content">>;
export const assetsCabModalData: TAssetsCabModalData = {
    send: {
        modalDialogClassName: "modal-dialog modal-dialog--info modal-dialog--send",
        titleIcon: MODAL_ICONS.send,
        title: "Send cryptocurrency",
    },
    get: {
        modalDialogClassName: "modal-dialog modal-dialog--info modal-dialog--get",
        titleIcon: MODAL_ICONS.get,
        title: "Get cryptocurrency",
    },
};

// export type TSurveyModalItem = {
//     question: string;
//     answers: string[];
// }

// export type TSurveyModalItemArr = TSurveyModalItem[];
