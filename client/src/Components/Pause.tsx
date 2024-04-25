import { Modal } from './Modal';
import { useState } from 'react';
import { Quit } from './Quit';

export function Pause() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <div className="p-3">
        <button
          onClick={() => setOpen(true)}
          className="text-white hover:text-yellow-500">
          Pause
        </button>
        <Modal onClose={() => setOpen(false)} isOpen={open}>
          <div>P A U S E D</div>
          <div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-yellow-500">
              Resume
            </button>
          </div>
          <div>
            <button>
              <Quit />
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
