type TFaqCategory = "General questions" | "Financial questions" | "Security questions";

export type TFaqItem = {
    id: number;
    title: string;
    answer: string;
};

export type TFaqItemTab = {
    id: number;
    category: TFaqCategory;
    items: TFaqItem[];
};

export type TFaqItemTabArr = TFaqItemTab[];

const answers: TFaqItemTab = {
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
    ],
};
