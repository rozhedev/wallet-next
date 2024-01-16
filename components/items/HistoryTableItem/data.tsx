import { THistoryTableItemArr } from "./types";

export const historyTableItemArr: THistoryTableItemArr = [
    {
        id: 1,
        operType: "Replenish",
        curName: "Binance Coin (BNB)",
        curSign: "BNB",
        amount: 0.12345678,
        transactionStatus: "Complete",
        transactionId: 455655,
        date: "07.07.2023 17:17",
        recipient: "bc1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7",
        modifClass: "dashboard-log-item--get",
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13.7142 32L31.9999 50.2857L50.2857 32" />
                <path d="M59.4285 59.4285H4.57141" />
                <path d="M32 4.57153V50.2858" />
            </svg>
        ),
    },
    {
        id: 2,
        operType: "Withdraw",
        curName: "Tether (USDT)",
        curSign: "USDT",
        amount: 5.25,
        transactionStatus: "Complete",
        transactionId: 547676,
        date: "07.07.2023 17:17",
        recipient: "0x1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7",
        modifClass: "dashboard-log-item--send",
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M50.2857 22.8572L31.9999 4.57153L13.7142 22.8572" />
                <path d="M59.4285 59.4285H4.57141" />
                <path d="M32 50.2858V4.57153" />
            </svg>
        ),
    },
    {
        id: 3,
        operType: "Exchange",
        curName: "Bitcoin (BTC)",
        curSign: "BTC",
        amount: 0.12345678,
        transactionStatus: "Complete",
        transactionId: 455655,
        date: "07.07.2023 17:17",
        recipient: "bc1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7",
        modifClass: "dashboard-log-item--info",
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M32 25.6H41.1428V17.0667L59.4285 29.8666L41.1428 42.6666V34.1333H22.8571V25.6L4.57141 38.4L22.8571 51.2V42.6666H32" />
            </svg>
        ),
    },
    {
        id: 4,
        operType: "Airdrop",
        curName: "Tether (USDT)",
        curSign: "USDT",
        amount: 5.25,
        transactionStatus: "Pending",
        transactionId: 547676,
        date: "07.07.2023 17:17",
        recipient: "0x1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7",
        modifClass: "dashboard-log-item--info",
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M54.8571 37.4858C54.8571 15.543 32 4.57153 32 4.57153C32 4.57153 9.14282 15.543 9.14282 37.4858C9.14282 49.6001 19.4285 59.4287 32 59.4287C44.5714 59.4287 54.8571 49.6001 54.8571 37.4858Z" />
                <path d="M20.5714 37.4858C20.6344 40.4555 21.8733 43.2787 24.016 45.3358C26.1588 47.3928 29.0302 48.5155 32 48.4573 " />
            </svg>
        ),
    },
    {
        id: 5,
        operType: "Replenish",
        curName: "Bitcoin (BTC)",
        curSign: "BTC",
        amount: 0.12345678,
        transactionStatus: "Complete",
        transactionId: 455655,
        date: "07.07.2023 17:17",
        recipient: "bc1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7",
        modifClass: "dashboard-log-item--wait",
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="32"
                    cy="32.0001"
                    r="26.4286"
                />
                <path d="M32 9.14307V34.2859H45.7143" />
            </svg>
        ),
    },
    {
        id: 6,
        operType: "Withdraw",
        curName: "Tether (USDT)",
        curSign: "USDT",
        amount: 5.25,
        transactionStatus: "Complete",
        transactionId: 547676,
        date: "07.07.2023 17:17",
        recipient: "0x1uf5tdn87k2uz7r2kl5zrfww362ch3746lq5vse7",
        modifClass: "dashboard-log-item--send",
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M50.2857 22.8572L31.9999 4.57153L13.7142 22.8572" />
                <path d="M59.4285 59.4285H4.57141" />
                <path d="M32 50.2858V4.57153" />
            </svg>
        ),
    },
];
