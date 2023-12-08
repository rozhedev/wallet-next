type TSectionId = "main-assets" | "exchange-rate" | "advant" | "download";
type TPageId = "assets" | "faq" | "privacy_policy" | "promoactions" | "register-page" | "signin-page" | "terms";

export type TSectionLayoutProps = {
    children: React.ReactNode;
    id: TSectionId | TPageId;
};
