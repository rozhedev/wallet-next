type TSectionId = "main-assets" | "exchange-rate" | "advant" | "download";
type TPageId = "assets" | "faq" | "privacy-policy" | "promoactions" | "register" | "signin-page";

export type TSectionLayoutProps = {
    children: React.ReactNode;
    id: TSectionId | TPageId;
};
