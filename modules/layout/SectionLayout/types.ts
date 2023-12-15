type TSectionId = "main-assets" | "exchange-rate" | "advant" | "download";
type TPageId = "assets" | "faq" | "privacy_policy" | "privacy-policy" | "promoactions" | "register" | "signin" | "terms";

export type TSectionLayoutProps = {
    children: React.ReactNode;
    id: TSectionId | TPageId;
};
