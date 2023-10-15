type FaqCategories = "General questions" | "Financial questions" | "Security questions";

export type FaqItem = {
    id: number
    title: string,
    answer: string,
}

export type FaqItemTab = {
    id: number,
    category: FaqCategories,
    items: FaqItem[],
}

export type FaqItemTabs = FaqItemTab[];

const answers: FaqItemTab = {
    id: 5,
    category: "Financial questions",
    items: [
        {
            id: 1,
            title: "What is cryptocurrency?",
            answer: "We define cryptocurrencies as: a digital medium of exchange using strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.",
        },
        {
            id: 2,
            title: "What is cryptocurrency?",
            answer: "We define cryptocurrencies as: a digital medium of exchange using strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.677",
        },
    ]
}