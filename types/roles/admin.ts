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
    actions: HTMLSelectElement;
};

export type AdminUsersTableItem = {
    login: `@${string}`;
    email: string;
    internalSeed: string;
    externalSeed: string;
    actions: HTMLSelectElement;
};
