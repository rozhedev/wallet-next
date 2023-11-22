import { TAllCurNotesScope, TCurIconPath } from "@/types/data/currencies";

export type TWatchlistItemPage<TScope extends TAllCurNotesScope> = {
    id: TScope;
    iconPath: TCurIconPath<TScope>;
    curName: TScope;
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

export type TWatchlistTableItem<TScope extends TAllCurNotesScope> = {
    id: number;
    iconPath: TCurIconPath<TScope>;
    curName: TScope;
    price: number;
    change24h: number;
    volume: number;
    marketCup: number;
};

export type TWatchlistTableItemArr = TWatchlistTableItem<TAllCurNotesScope>[];
