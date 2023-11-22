export type TPromoactionsItem = {
    id: number;
    title: string;
    tags: Array<`#${string}`>;
    btnLabel: "Get airdrop" | "See changelog";
    modal: TPromoactionsModal;
};

export type TPromoactionsModal = {
    modalType: "#modal-error" | "#modal-success" | "https://github.com/airgap-it/airgap-wallet" | "";
    title: string;
    content: string;
    btnLabel: "Close" | "Participate";
};

export type TPromoactionsItemArr = TPromoactionsItem[];

// * USAGE

const promoArr: TPromoactionsItem = {
    id: 4,
    title: "bgbbgbgnh",
    tags: ["#gvbnbggnhh", "#gbgnjhjnir", "#vjbjb"],
    btnLabel: "Get airdrop",
    modal: {
        modalType: "#modal-error",
        title: "Event expired",
        content: "This event is over. Stay tuned so you don't miss any new promotions.",
        btnLabel: "Close",
    },
};
