import { TRoute } from "@/data/routes"

export type TPromoactionsItem = {
    id: number;
    title: React.ReactNode;
    tags: Array<`#${string}`>;
    btnLabel: "Get airdrop" | "See changelog";
    isLink: boolean;
    linkHref: `https://${string}` | TRoute | "";
};

export type TPromoactionsModal = {
    modalType: "modal-error" | "modal-success" | "https://github.com/airgap-it/airgap-wallet" | "";
    title: string;
    content: React.ReactNode;
    btnLabel: "Close" | "Participate";
};

export type TPromoactionsItemArr = TPromoactionsItem[];
