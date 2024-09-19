import React, { FC, useState, useEffect } from "react";
import { default as ReactModal } from "react-responsive-modal";
import type { TModalProps, TModalHeaderProps, TModalContentProps, TModalFooterProps } from "./types";

// * Modal container
export const Modal = ({ modalId, modalDialogClassName, isOpen, onCloseModal, children }: TModalProps): JSX.Element => {
    const defaultClassNames = {
        modal: "modal _active",
        closeButton: "modal-header__close",
    };
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (isOpen && scrollbarWidth) {
            const _styles = {
                modal: { marginRight: `${scrollbarWidth + 12}px`, transition: ".6s all" },
            };
            setStyles(_styles);
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = "hidden";
        }

        return () => {
            setStyles({});
            document.body.style.paddingRight = "0px";
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <ReactModal
            modalId={modalId}
            center
            classNames={defaultClassNames}
            onClose={onCloseModal}
            open={isOpen}
            styles={styles}
            closeIcon={<span>&#x2715;</span>}
        >
            <div className={modalDialogClassName}>{children}</div>
        </ReactModal>
    );
};

// * Modal header
const ModalHeader: FC<TModalHeaderProps> = ({ titleIcon, title }): JSX.Element => (
    <div className="modal-header">
        {titleIcon}
        <h4 className="h4">{title}</h4>
    </div>
);

Modal.Header = ModalHeader;

// * Modal content
const ModalContent: FC<TModalContentProps> = ({ className, children }): JSX.Element => <div className={className}>{children}</div>;

Modal.Content = ModalContent;

// * Modal footer
const ModalFooter: FC<TModalFooterProps> = ({ className, children }): JSX.Element => <div className={className}>{children}</div>;

Modal.Footer = ModalFooter;
