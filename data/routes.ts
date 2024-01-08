export type TRoute = `/${string}`;
export type TRouteLabelScope =
    | "Home"
    | "Homepage"
    | "Assets"
    | "Supported assets"
    | "Promoactions"
    | "Popular questions"
    | "Privacy Policy"
    | "Terms of Service"
    | "Terms"
    | "Register"
    | "Register wallet"
    | "Sign in"
    | "Dashboard"
    | "History"
    | "Settings"
    | "Survey"
    | "Sign Out"
    | "Watchlist"
    | "WalletConnect";

type TRoutesList = {
    public: Record<"home" | "assets" | "promoactions" | "faq" | "privacyPolicy" | "terms" | "register" | "signin", TRoute>;

    private: Record<"dashboard" | "assetsCab" | "history" | "settings" | "watchlist", TRoute>;
};

export const ROUTES: TRoutesList = {
    public: {
        home: "/",
        assets: "/assets",
        promoactions: "/promoactions",
        faq: "/faq",
        privacyPolicy: "/privacy_policy",
        terms: "/terms",
        register: "/register",
        signin: "/signin",
    },
    private: {
        dashboard: "/dashboard",
        assetsCab: "/assets_cab",
        history: "/history",
        settings: "/settings",
        watchlist: "/watchlist",
    },
};
