import { StaticImageData } from "next/image";
import { TAllCurNotesScope } from "@/types/data/currencies";
import { TWalletFormatsScope } from "@/types/data/user-balances";

export type TGetCurProps = {
    modalId: `modal-get-${TAllCurNotesScope}`;
    walletAddress: TWalletFormatsScope;
    curName: TAllCurNotesScope;
    qrCodeImg: StaticImageData;
    isOpen: boolean;
    onCloseModal: () => void;
};
