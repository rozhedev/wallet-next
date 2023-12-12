import { T_TabsNavItemArr, T_TabsBody } from "./types";

export const navItemsArr: T_TabsNavItemArr = [
    {
        id: 1,
        className: "tabs__nav-item navlink",
        label: "General questions",
    },
    {
        id: 2,
        className: "tabs__nav-item navlink",
        label: "Financial questions",
    },
    {
        id: 3,
        className: "tabs__nav-item navlink",
        label: "Security questions",
    },
];

// export const contentArr: T_TabsBody = [
//     {
//         tabsBodyId: 1,
//         accordionsArr: [
//             {
//                 key: 1,
//                 question: "question11",
//                 answer: "answer11",
//             },
//             {
//                 key: 2,
//                 question: "question12",
//                 answer: "answer12",
//             },
//             {
//                 key: 3,
//                 question: "question13",
//                 answer: "answer13",
//             }
//         ],
//     },
//     {
//         tabsBodyId: 2,
//         accordionsArr: [
//             {
//                 key: 1,
//                 question: "question21",
//                 answer: "answer21",
//             },
//             {
//                 key: 2,
//                 question: "question22",
//                 answer: "answer22",
//             },
//             {
//                 key: 3,
//                 question: "question23",
//                 answer: "answer23",
//             }
//         ],
//     },
//     {
//         tabsBodyId: 3,
//         accordionsArr: [
//             {
//                 key: 1,
//                 question: "question31",
//                 answer: "answer31",
//             },
//             {
//                 key: 2,
//                 question: "question32",
//                 answer: "answer32",
//             },
//             {
//                 key: 3,
//                 question: "question33",
//                 answer: "answer33",
//             }
//         ],
//     },
// ];

export const contentArr: T_TabsBody = [
    [
        {
            key: 1,
            question: "question11",
            answer: "answer11",
        },
        {
            key: 2,
            question: "question12",
            answer: "answer12",
        },
        {
            key: 3,
            question: "question13",
            answer: "answer13",
        },
    ],
    [
        {
            key: 1,
            question: "question21",
            answer: "answer21",
        },
        {
            key: 2,
            question: "question22",
            answer: "answer22",
        },
        {
            key: 3,
            question: "question23",
            answer: "answer23",
        },
    ],
    [
        {
            key: 1,
            question: "question31",
            answer: "answer31",
        },
        {
            key: 2,
            question: "question32",
            answer: "answer32",
        },
        {
            key: 3,
            question: "question33",
            answer: "answer33",
        },
    ],
];
