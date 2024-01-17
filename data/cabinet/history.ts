import { TOptionGroup } from "@/ui/Select/types";

export const typeSelectOptions: TOptionGroup = [
    {
        label: "Type",
        value: "history-type-sort-title",
    },
    {
        label: "Replenish",
        value: "history-type-sort-replenish",
    },
    {
        label: "Withdraw",
        value: "history-type-sort-withdraw",
    },
    {
        label: "Exchange",
        value: "history-type-sort-exchange",
    },
    {
        label: "Wallet service",
        value: "history-type-sort-wallet-service",
    },
];

export const currencySelectOptions: TOptionGroup = [
    {
        label: "Bitcoin (BTC)",
        value: "cur-sort-bitcoin-BTC",
    },
    {
        label: "Ethereum (ETH)",
        value: "cur-sort-ethereum-ETH",
    },
    {
        label: "Tether (USDT)",
        value: "cur-sort-tether-USDT",
    },
    {
        label: "Binance Coin (BNB)",
        value: "cur-sort-binance-coin-BNB",
    },
];

export const statusSelectOptions: TOptionGroup = [
    {
        label: "Complete",
        value: "status-sort-complete",
    },
    {
        label: "Pending",
        value: "status-sort-pending",
    },
    {
        label: "Failed",
        value: "status-sort-failed",
    },
];

export const dateSelectOptions: TOptionGroup = [
    {
        label: "From new to old",
        value: "date-new-old",
    },
    {
        label: "From old to new",
        value: "status-old-new",
    },
];

export const historyEmptyTableLabel = "No transactions yet";