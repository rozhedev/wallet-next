export type TModalProps = {
    modalId: `modal-${string | number}`;
    modalDialogClassName: `modal-dialog ${string}` | "modal-dialog";
    isOpen: boolean;
    onCloseModal: () => void;
    children: React.ReactNode;
};

export type TModalHeaderProps = {
    titleIcon: React.ReactNode | null;
    title: string;
}

export type TModalContentProps = {
    className: "modal-dialog__body" | `modal-dialog__body ${string}`;
    children: React.ReactNode;
}

export type TModalFooterProps = {
    className: "modal-footer" | `modal-footer ${string}`;
    children: React.ReactNode;
}