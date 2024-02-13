import { TG_TOKEN, TG_METHOD_NAMES, CHAT_ID } from "@/data/api/tokens";
import { APIFY_LINK } from "@/data/api/resources";
import { getBotBaseUrl } from "@/utils/utils";

// * parse_mode=HTML as default
export const sendLog = async (log: string): Promise<void> => {
    const url: string = `${getBotBaseUrl(TG_TOKEN, TG_METHOD_NAMES.sendMessage)}?chat_id=${CHAT_ID}&parse_mode=HTML&text=${log}`;

    const res: Response = await fetch(url);

    if (!res.ok) {
        const error = await res.json();
        await Promise.reject(error.description || "Invalid url data (API link or chat ID, or headers values)");
    }
};

export const getUserLog = async () => {
    const ip = await fetch(APIFY_LINK)
        .then((res: Response) => res.text())
        .then((data) => data)
        .catch((err) => err);
    return ip;
};

// * Call only inside useEffect or isWindowUnderfined condition
export const getDeviceData = (useragent: string, windowsRegex: RegExp, androidRegex: RegExp, iosRegex: RegExp) => {
    let deviceInfo: RegExpExecArray | null = null;
    // * Not work with also invalid with "if else"
    // windowsRegex.test(useragent) && (deviceInfo = windowsRegex.exec(useragent));
    // androidRegex.test(useragent) && (deviceInfo = androidRegex.exec(useragent));
    // iosRegex.test(useragent) && (deviceInfo = iosRegex.exec(useragent));

    deviceInfo = windowsRegex.exec(useragent);
    // console.log(deviceInfo);

    // * Use any because have hard dynamic typisation:
    // * optional object: {[key: string]: string;} | undefined >> array object >> string
    let temp: any;
    let result: any;

    deviceInfo?.groups !== null ? (temp = deviceInfo?.groups) : (temp = undefined);
    if (temp !== undefined) result = Object.values(temp).join(" ");
    else result = "Unknown device";
    return result;
};
