
export type TRoute = {
    href: `/${string}`;
    label: string;
}

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
    }
}

export const ROUTES: TRoutesList = {
    public: {
        home: {
            href: "/",
            label: "Home",
        },
        assets: {
            href: "/assets",
            label: "Assets",
        },
        promoactions: {
            href: "/promoactions",
            label: "Promoactions",
        },
        faq: {
            href: "/faq",
            label: "Popular questions",
        },
        privacyPolicy: {
            href: "/privacy_policy",
            label: "Privacy Policy",
        },
        terms: {
            href: "/terms",
            label: "Terms of Service",
        },
        register: {
            href: "/register",
            label: "Register",
        },
        signin: {
            href: "/signin",
            label: "Sign in",
        },
    },
    private: {
        dashboard: {
            href: "/dashboard",
            label: "Dashboard",
        },
        assetsCab: {
            href: "/assets-cab",
            label: "Assets"
        },
        history: {
            href: "/history",
            label: "History",
        },
        settings: {
            href: "/settings",
            label: "Settings",
        },
        watchlist: {
            href: "/watchlist",
            label: "Watchlist",
        },
    },
};
