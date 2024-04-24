import { ReactNode, useEffect, useRef } from 'react';

type ModalProp = {
  children: ReactNode;
  isOpen: boolean;
};

export function Victory({ isOpen, children }: ModalProp) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);

  return (
    <dialog ref={modal} className="w-2/5 h-2/5 rounded-2xl mt-7">
      {children}
    </dialog>
  );
}
