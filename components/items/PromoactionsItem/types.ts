import { TModalProps } from "@/ui/Modal/index";

export type TPromoactionsItem = {
    id: number;
    title: React.ReactNode;
    tags: Array<`#${string}`>;
    btnLabel: "Get airdrop" | "See changelog";
    isLink: boolean;
    linkHref: `https://${string}` | `/${string}` | "";
    // modal: TModalProps;
};

export type TPromoactionsModal = {
    modalType: "modal-error" | "modal-success" | "https://github.com/airgap-it/airgap-wallet" | "";
    title: string;
    content: React.ReactNode;
    btnLabel: "Close" | "Participate";
};

export type TPromoactionsItemArr = TPromoactionsItem[];

// * USAGE

const promoArr: TPromoactionsItem = {
    id: 4,
    title: "bgbbgbgnh",
    tags: ["#gvbnbggnhh", "#gbgnjhjnir", "#vjbjb"],
    btnLabel: "Get airdrop",
    isLink: true,
    linkHref: "https://github.com/airgap-it/airgap-wallet",

    // modal: {
    //     modalType: "modal-error",
    //     title: "Event expired",
    //     content: "This event is over. Stay tuned so you don't miss any new promotions.",
    //     btnLabel: "Close",
    // },
};
