// import { useState } from 'react';
import { Dungeon } from '../Components/Dungeon';
// import { Modal } from '../Components/Modal';

export function Game() {
  // const [open, setOpen] = useState(true);
  // const [countDown, setCountDown] = useStat(false);
  // function handleClick() {
  //   setCountDown(true);
  //   setInterval()
  // }

  // const [running, setRunning] = useState(false);

  // useEffect(() => {
  //   let intervalId;
  //   if (running) {
  //     intervalId = setInterval(() => {
  //       setTime((prev) => prev + 10);
  //     }, 10);
  //   } else if (!running) {
  //     clearInterval(intervalId);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [running]);
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-fit h-fit pl-2 pr-2 bg-gray-500 border-solid drop-shadow-2xl">
        {/* <Modal onClick={handleClick} isOpen={open}>
          <button>Ready</button>
        </Modal> */}
        <Dungeon />
      </div>
    </div>
  );
}
