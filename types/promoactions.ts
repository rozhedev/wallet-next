export type PromoactionsItem = {
    id: number;
    title: string;
    tags: Array<`#${string}`>;
    btnLabel: "Get airdrop" | "See changelog";
    modal: PromoactionsModal;
};

export type PromoactionsModal = {
    modalType: "#modal-error" | "#modal-success" | "https://github.com/airgap-it/airgap-wallet" | "";
    title: string;
    content: string;
    btnLabel: "Close" | "Participate";
};

export type PromoactionsItems = PromoactionsItem[];

// * USAGE

const promoArr: PromoactionsItem = {
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
