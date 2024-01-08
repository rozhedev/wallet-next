type TPaginationBtnsArr = { id: number; title: `Page ${number}` }[];

export type TPaginationProps = {
    btnsArr: TPaginationBtnsArr;
}

export const paginationBtnArr: TPaginationBtnsArr = [
    {
        id: 1,
        title: "Page 1",
    },
    {
        id: 2,
        title: "Page 2",
    },
    {
        id: 3,
        title: "Page 3",
    },
    {
        id: 4,
        title: "Page 4",
    },
    {
        id: 5,
        title: "Page 5",
    },
];
