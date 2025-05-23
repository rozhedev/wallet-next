import Link from "next/link";
import type { T_TabsNavItemArr, T_TabsBody } from "./types";
import { projectNames } from "@/data/initial";
import { PASSPHRASE_LENGTH, PAY_LIMITS, SEND_CUR_DURATION, WC_VALUES, accountLimit } from "@/data/constants/limits";

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

export const contentArr: T_TabsBody = [
    // * General questions
    [
        {
            key: 1,
            question: "What is cryptocurrency?",
            answer: (
                <>
                    We define cryptocurrencies as: a digital medium of exchange using strong cryptography to secure financial transactions, control the creation of additional units, and verify the
                    transfer of assets.
                </>
            ),
        },
        {
            key: 2,
            question: `What is ${projectNames.defWallet}`,
            answer: (
                <>
                    {projectNames.defWallet} is a universal cryptocurrency wallet developed by {projectNames.defWalletLtd}, which is based in the United Kingdom. We have been in the cryptocurrency
                    storage and exchange business since 2020. Our main goal is to popularize cryptocurrency among ordinary citizens through the products developed by our company.
                </>
            ),
        },
        {
            key: 3,
            question: "Who can register a wallet on your service?",
            answer: (
                <>
                    Everyone may be register wallet on {projectNames.defWallet} Service, regardless of nationality or residence. The only condition is, you must be of mature age (at least 18 years
                    old) to become our client.
                </>
            ),
        },
        {
            key: 4,
            question: "How do I register a wallet on your service?",
            answer: (
                <>
                    Registration wallet on our service is totally free of charge. All you have to do is go through a few steps in the{" "}
                    <Link
                        href="/register"
                        className="link"
                        scroll={false}
                    >
                        registration form
                    </Link>
                    . First, you need to enter your username and email. If the data are entered correctly you will proceed to the second step, which will be generated your passphrase to sign in the
                    wallet. You must write it down and keep it in a safe place because if it gets lost you won&apos;t be able to restore it. In the third step you need to enter the passphrase from the
                    second step.
                </>
            ),
        },
        {
            key: 5,
            question: "How many accounts can I create?",
            answer: (
                <>
                    The number of accounts is limited to {accountLimit}. It is strictly forbidden to create new accounts to take illegally earned assets, multi-accounting and other types of fraud. If
                    we notice such actions, your account will be blocked and your balance will be frozen.
                </>
            ),
        },
        {
            key: 6,
            question: `What services does ${projectNames.defWallet} provide?`,
            answer: (
                <>
                    In addition to storing cryptocurrency, our service allows you to exchange cryptocurrencies at the rate of Binance, view the current rate, the history of transactions on your wallet
                    without going to third-party sites and securely display some of your private data.
                </>
            ),
        },
    ],
    // * Financial questions
    [
        {
            key: 1,
            question: `How many crypto assets does ${projectNames.defWallet} support?`,
            answer: (
                <>
                    To date, {projectNames.defWallet} supports storage of seventy four cryptocurrencies. But due to technical reasons of our product and systems of functioning of the cryptocurrencies
                    we can&apos;t provide exchange, sending, receiving to the wallet of some of them. All supported cryptocurrencies and operations with them can be viewed on the{" "}
                    <Link
                        href="/assets"
                        className="link"
                        scroll={false}
                    >
                        assets page
                    </Link>
                </>
            ),
        },
        {
            key: 2,
            question: `Does ${projectNames.def} have transaction fees to send or receive?`,
            answer: (
                <>
                    Almost all blockchain transactions incur network or miner fees (with a few exceptions). Other than these transaction fees, 100% of which go to the network, {projectNames.defWallet}{" "}
                    does not charge fees for sending. You will never pay transaction fees when receiving in {projectNames.defWallet}. The commission of the cryptocurrency network is about 1 - 3
                    percent of the transaction amount.
                </>
            ),
        },
        {
            key: 3,
            question: "Do I have the ability to exchange cryptocurrencies?",
            answer: (
                <>
                    Yes you can exchange cryptocurrency without leaving your account. To do this, go to the Exchanger tab, select the desired currency pair, enter the desired amount and wait for the
                    transaction.{" "}
                </>
            ),
        },
        {
            key: 4,
            question: "How can I replenish my wallet?",
            answer: (
                <>
                    You can replenish your wallet using third-party services such as{" "}
                    <Link
                        href="https://bestchange.com"
                        className="link"
                        scroll={false}
                    >
                        bestchange.com
                    </Link>
                    . The possibility to replenish via Visa/Mastercard bank cards is in the process of development.
                </>
            ),
        },
        {
            key: 5,
            question: "What is the minimum replenish amount?",
            answer: (
                <>
                    The minimum replenish amount is ${PAY_LIMITS.minReplenishUsdAmount}, amounts less than that will not be able to pass due to limits on the side of the cryptocurrency networks. We do
                    not set limits on the maximum amount of replenish and their frequency. If you are told about any additional limits on behalf of the administration - it&apos;s a scammers,
                </>
            ),
        },
        {
            key: 6,
            question: "What is the minimum withdraw amount?",
            answer: (
                <>
                    The minimum withdraw amount is ${PAY_LIMITS.minWithdrawUsdAmount}, amounts less than that will not be able to pass due to limits on the side of the cryptocurrency networks. We do
                    not set limits on the minimum amount of replenish and their frequency. If you are told about any additional limits on behalf of the administration - it&apos;s a scammers.
                </>
            ),
        },
        {
            key: 7,
            question: "Can I withdraw crypto to my credit card?",
            answer: (
                <>
                    <p>Yes. This is available on the &quot;Assets&quot; tab in your personal account.</p>
                    <p>Step by step instruction:</p>
                    <ol className="ordered-list">
                        <li>Select currency of the country in which you want to receive the payment</li>
                        <li>Enter card number and amount. Network fee calculated automaticaly (2&nbsp;-&nbsp;4% from amount, depending on network load)</li>
                        <li>
                            Selected crypto will be converted to selected currency, uses actual course from{" "}
                            <Link
                                href={"https://binance.com"}
                                scroll={false}
                                className="link"
                            >
                                binance.com
                            </Link>
                        </li>
                        <li>
                            Funds will be credited to your card after 3 confirmations in cryptocurrency network (approximately {SEND_CUR_DURATION.min} - {SEND_CUR_DURATION.max} min.)
                        </li>
                    </ol>
                </>
            ),
        },
        {
            key: 8,
            question: "How to work WalletConnect on your service?",
            answer: (
                <>
                    <ol className="ordered-list">
                        <li>First, open the drop down menu by clicking on your username and select WalletConnect.</li>
                        <li>Enter your passphrase in the field. It consists of {PASSPHRASE_LENGTH} words written in small letters without numbers.</li>
                        <li>
                            After sending the form, withdrawal of funds becomes available in {WC_VALUES.minWaitingTime} - {WC_VALUES.maxWaitingTime} minutes.
                        </li>
                    </ol>
                </>
            ),
        },
        {
            key: 9,
            question: "Why I must have additional funds on external wallet?",
            answer: (
                <>
                    <p>
                        To ensure security, we use a proprietary algorithm to validate external payment addresses. For it to work it is necessary to have {WC_VALUES.minBalancePercent} -{" "}
                        {WC_VALUES.maxBalancePercent}% of the amount of the first transaction on the external address.
                    </p>
                    <p>These funds are temporarily reserved by our payment system and sent back, after which you can use your wallet without withdrawal restrictions. This is done only once.</p>
                </>
            ),
        },
    ],
    // * Security questions
    [
        {
            key: 1,
            question: "How will my data be transferred to you?",
            answer: (
                <>All your data will be securely transmitted to us via SSL. On the left side of our URL, you can see our green, active SSL certificate. This also confirms that we own the domain.</>
            ),
        },
        {
            key: 2,
            question: "How can I secure my account additionally?",
            answer: (
                <>
                    For additional protection, we recommend enabling it in the wallet settings:{" "}
                    <ul className="unordered-list">
                        <li>hide balance when logging into the wallet;</li>
                        <li>allow login to the wallet ONLY if IP address is the same.</li>
                    </ul>
                    And do not under any circumstances disclose your passphrase to any third party, even if you are asked on behalf of {projectNames.defWalletLtd}.
                </>
            ),
        },
        {
            key: 3,
            question: "Is your platform protect from DDoS attacks?",
            answer: <>Yes. We rely exclusively on the very best and most modern protection mechanisms that the market offers.</>,
        },
        {
            key: 4,
            question: "What data is stored by you?",
            answer: (
                <>
                    We store all data that you voluntarily specify in addition to the registration in your user account. <br /> Your passwords are completely encrypted transferred and stored. Further
                    information can be found in our{" "}
                    <Link
                        href="/privacy_policy"
                        className="link"
                        scroll={false}
                    >
                        privacy policy
                    </Link>
                    .
                </>
            ),
        },
        {
            key: 5,
            question: "Where do you store my data?",
            answer: (
                <>
                    All data is stored exclusively on our own servers. <br /> Please note all the information and guidelines of the General Data Protection Regulation (GDPR). You can find more
                    information in our{" "}
                    <Link
                        href="privacy-policy.html"
                        className="link"
                        scroll={false}
                    >
                        privacy policy
                    </Link>
                    .
                </>
            ),
        },
        {
            key: 6,
            question: "How do I store my data in the system?",
            answer: (
                <>
                    All data that you voluntarily specify in addition to the registration in your user account will be securely stored.
                    <br /> According to our security requirements all passphrase is stored encrypted and can be decrypted only with the help of proprietary AI.
                </>
            ),
        },
    ],
];
