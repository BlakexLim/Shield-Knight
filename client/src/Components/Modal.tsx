import React, { ReactNode, useEffect, useRef } from 'react';

type ModalProp = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, children, onClose }: ModalProp) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);

  function handleEsc(e: React.KeyboardEvent<HTMLDialogElement>): void {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  return (
    <dialog
      ref={modal}
      onKeyDown={handleEsc}
      className="lg:w-2/5 sm:w-4/5 p-2 rounded-2xl lg:mt-7 bg-zinc-400">
      {children}
    </dialog>
  );
}
