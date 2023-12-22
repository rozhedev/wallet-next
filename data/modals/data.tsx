import { ExtractValFromObj } from "@/types/utils/extractors";
import { TModalProps } from "@/ui/Modal/index";
import { MODAL_ICONS, TModalIcons } from "./title-icons";

type TModalData = {
    id: ExtractValFromObj<TModalProps, "modalId">;
    modalDialogClassName: ExtractValFromObj<TModalProps, "modalDialogClassName">;
    titleIcon:
        | ExtractValFromObj<TModalIcons, "success">
        | ExtractValFromObj<TModalIcons, "error">
        | ExtractValFromObj<TModalIcons, "walletConnect">
        | ExtractValFromObj<TModalIcons, "get">
        | ExtractValFromObj<TModalIcons, "send">
        | ExtractValFromObj<TModalIcons, "survey">;
    title: string;
    content: React.ReactNode | string | string[];
};

type TModalDataObj = Record<"success" | "error", TModalData>;

// * All modal data
// * promo - promoactions
export const promoModalData: TModalDataObj = {
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

// export type TSurveyModalItem = {
//     question: string;
//     answers: string[];
// }

// export type TSurveyModalItemArr = TSurveyModalItem[];
