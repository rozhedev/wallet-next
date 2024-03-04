import { StaticImageData } from "next/image";
import { TAllCurNotesScope } from "@/types/data/currencies";

export type TGetCurProps = {
    modalId: `modal-get-${TAllCurNotesScope}`;
    walletAddress: string;
    curName: TAllCurNotesScope;
    qrCodeImg: StaticImageData;
    isOpen: boolean;
    onCloseModal: () => void;
};
