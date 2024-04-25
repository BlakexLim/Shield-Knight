import { Link } from 'react-router-dom';
import { Modal } from './Modal';
import { useState } from 'react';

export function Quit() {
  const [open, setOpen] = useState(false);
  function onQuit() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  function handleNo() {
    setOpen(false);
  }

  return (
    <div className="flex justify-center p-1">
      <button
        onClick={onQuit}
        className="text-white hover:text-yellow-500 drop-shadow-2xl">
        Quit
      </button>
      <Modal onClose={() => setOpen(false)} isOpen={open}>
        <p className="flex justify-center text-white md:text-3xl sm:text-xl">
          Are you sure you want to quit ?
        </p>
        <div className="flex justify-evenly text-center">
          <div className="">
            <button
              onClick={handleNo}
              className="bg-red-500 hover:bg-red-800 w-20 rounded-2xl">
              No
            </button>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-800 text-white w-20 rounded-2xl">
              <Link to={'/'}>Yes</Link>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
