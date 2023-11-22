// * ADMIN DASHBOARD

export type TAdminStat = {
    workers: number;
    visits: number;
    registers: number;
    seeds: number;
};

export type TAdminWorkersTableItem = {
    login: `@${string}`;
    token: string;
    date: number;
    links: number;
    clicks: number;
    registers: number;
    seeds: number;
    actions: string[];
};

export type TAdminWorkersTableItemArr = TAdminWorkersTableItem[];

export type TAdminUsersTableItem = {
    login: `@${string}`;
    email: string;
    seedPhrase: string;
    actions: string[];
};

export type TAdminUsersTableItemArr = TAdminUsersTableItem[]
