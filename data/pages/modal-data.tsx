import { ExtractValFromObj } from "@/types/utils/extractors";
import { TModalProps } from "@/ui/Modal/index";

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
    content: React.ReactNode;
}[];

// export type TSurveyModalItem = {
//     question: string;
//     answers: string[];
// }

// export type TSurveyModalItemArr = TSurveyModalItem[];

// * All modal data
export const promoactionsModalData: TModalData = [
    {
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
    {
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
];
