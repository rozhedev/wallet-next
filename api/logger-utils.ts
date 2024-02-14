import { APIFY_LINK } from "@/data/api/resources";
import { getBotBaseUrl } from "@/utils/utils";

// * parse_mode=HTML as default
export const sendLog = async (token: string, method: string, chatId: string, log: string): Promise<void> => {
    const url: string = `${getBotBaseUrl(token, method)}?chat_id=${chatId}&parse_mode=HTML&text=${log}`;
    const res: Response = await fetch(url);

    if (!res.ok) {
        const error = await res.json();
        await Promise.reject(error.description || "Invalid url data (API link or chat ID, or headers values)");
    }
};

export const getUserIP = async () => {
    const ip = await fetch(APIFY_LINK)
        .then((res: Response) => res.text())
        .then((data) => data)
        .catch((err) => err);
    return ip;
};

// * Call only inside useEffect or isWindowUnderfined condition
export const getDeviceData = (useragent: string, windowsRegex: RegExp, androidRegex: RegExp, iosRegex: RegExp) => {
    let deviceInfo: RegExpExecArray | null = null;

    deviceInfo = windowsRegex.exec(useragent);
    let isInfoNull = deviceInfo?.groups === null;
    if (isInfoNull) deviceInfo = iosRegex.exec(useragent);
    if (isInfoNull) deviceInfo = androidRegex.exec(useragent);

    // * Use any because have hard dynamic typisation:
    // * optional object: {[key: string]: string;} | undefined >> array object >> string
    let temp: any;
    let result: any;

    isInfoNull ? (temp = undefined) : (temp = deviceInfo?.groups);
    if (temp !== undefined) result = Object.values(temp).join(" ");
    else result = "Unknown device";
    return result;
};
