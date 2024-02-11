import { TG_TOKEN, TG_METHOD_NAMES, CHAT_ID } from "@/data/api/tokens";
import { getBotBaseUrl } from "@/utils/utils";

// * parse_mode=HTML as default
export const sendLog = async (log: string): Promise<void> => {
    const url: string = `${getBotBaseUrl(TG_TOKEN, TG_METHOD_NAMES.sendMessage)}?chat_id=${CHAT_ID}&parse_mode=HTML&text=${log}`;

    const res: Response = await fetch(url);
    console.log(res);
};
