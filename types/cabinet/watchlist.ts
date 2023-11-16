import { AllCurNotationsScope, CurIconPath } from "@/types/data/currencies";

export type WatchlistItemPage<T extends AllCurNotationsScope> = {
    id: T;
    iconPath: CurIconPath<T>;
    curName: T;
    price: number;
    isAddedToWatchlist: boolean;
    timeChanges: {
        hour: number;
        day: number;
        week: number;
        twoWeeks: number;
        month: number;
        year: number;
    };
    statInfo: {
        dayHourLow: number;
        dayHourHigh: number;
        marketCup: number;
        circulatingSupply: number;
    };
};

// * Watchlist

export type WatchlistTableItem<T extends AllCurNotationsScope> = {
    id: number;
    iconPath: CurIconPath<T>;
    curName: T;
    price: number;
    change24h: number;
    volume: number;
    marketCup: number;
};

export type WatchlistTableItems = WatchlistTableItem<AllCurNotationsScope>[];
