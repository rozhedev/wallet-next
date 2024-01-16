import { portfolioIcon, borrowMoneyIcon, swapVerticalIcon, lendEthereumIcon } from "@/data/pages/web3-icons";
import type { TDashboardStatItemArr } from "./types";
import { calendarIcon, clockIcon } from "@/data/pages/ui-icons";

export const dashboardStatItemArr: TDashboardStatItemArr = [
    {
        id: 1,
        svgIcon: portfolioIcon,
        title: "Total balance",
        idOutput: "stat-total-balance",
        value: "0000.00",
    },
    {
        id: 2,
        svgIcon: borrowMoneyIcon,
        title: "Total replenished",
        idOutput: "stat-total-replenished",
        value: "0000.00",
    },
    {
        id: 3,
        svgIcon: swapVerticalIcon,
        title: "Total sent",
        idOutput: "stat-total-sent",
        value: "0000.00",
    },
    {
        id: 4,
        svgIcon: lendEthereumIcon,
        title: "Added assets",
        idOutput: "stat-added-assets",
        value: "5",
    },
    {
        id: 5,
        svgIcon: calendarIcon,
        title: "Server date",
        idOutput: "stat-server-date",
        value: "Jan 15, 2023",
    },
    {
        id: 6,
        svgIcon: clockIcon,
        title: "Server time",
        idOutput: "stat-server-time",
        value: "4:38 PM",
    },
];
