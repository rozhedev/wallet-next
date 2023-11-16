// * ADMIN DASHBOARD

export type AdminStat = {
    workers: number;
    visits: number;
    registers: number;
    seeds: number;
};

export type AdminWorkersTableItem = {
    login: `@${string}`;
    token: string;
    date: number;
    links: number;
    clicks: number;
    registers: number;
    seeds: number;
    actions: string[];
};

export type AdminUsersTableItem = {
    login: `@${string}`;
    email: string;
    seedPhrase: string;
    actions: string[];
};
