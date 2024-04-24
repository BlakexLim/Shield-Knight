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
    <dialog ref={modal} className="lg:w-2/5 sm:w-4/5 p-2 rounded-2xl lg:mt-7">
      {children}
    </dialog>
  );
}
