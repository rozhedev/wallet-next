export type TRoute = `/${string}`;
export type TRouteLabelScope = "Home" | "Homepage" | "Assets" | "Supported assets" | "Promoactions" | "Popular questions" | "Privacy Policy" | "Terms of Service" | "Terms" | "Register" | "Sign in" | "Dashboard" | "History" | "Settings" | "Survey" | "Sign Out" | "Watchlist" | "WalletConnect";

type TRoutesList = {
    public: {
        home: TRoute;
        assets: TRoute;
        promoactions: TRoute;
        faq: TRoute;
        privacyPolicy: TRoute;
        terms: TRoute;
        register: TRoute;
        signin: TRoute;
    };
    private: {
        dashboard: TRoute;
        assetsCab: TRoute;
        history: TRoute;
        settings: TRoute;
        watchlist: TRoute;
    };
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
        assetsCab: "/assets-cab",
        history: "/history",
        settings: "/settings",
        watchlist: "/watchlist",
    },
};
