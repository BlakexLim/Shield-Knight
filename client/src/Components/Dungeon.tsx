import { useState } from 'react';
import { GameMap } from './GameMap';
import { Pause } from './Pause';
import { Quit } from './Quit';
import { Time } from './Time';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';

export function Dungeon() {
  const [running, setRunning] = useState(false);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  const [time, setTime] = useState(0);

  function handleReady() {
    if (start === true) {
      setStart(false);
      setRunning(true);
    }
  }

  function handleVictory() {
    setEnd(true);
    setRunning(false);
  }

  return (
    <div className="flex flex-col w-fit h-fit">
      {/* game start modal */}
      <Modal isOpen={start} onClose={() => setStart(false)}>
        <div className="bg-yellow-500 p-3 rounded-2xl">
          <div className="flex flex-col justify-center bg-white animate-pulse ease-out rounded-2xl lg:p-12 sm:p-3">
            <button
              onClick={handleReady}
              className="lg:text-5xl sm:text-lg text-blue-500 hover:text-blue-800">
              R e a d y
            </button>
            <p className="text-center text-sm font-sans">
              (Timer will begin when ready)
            </p>
          </div>
        </div>
      </Modal>
      {/* game end modal */}
      <Modal onClose={() => setEnd(false)} isOpen={end}>
        <div className="flex flex-col items-center">
          <h1 className="lg:mt-5 w-3/5 h-1/5 text-center lg:text-5xl md:text-3xl sm:text-lg tracking-widest text-blue-700 animate-pulse">
            VICTORY
          </h1>
          <div className="flex justify-center items-center md:text-4xl sm:text-lg bg-neutral-800 w-2/5 h-32 rounded-2xl">
            <Time time={time}></Time>
          </div>
          <button className="pt-1 lg:mt-12 w-1/5 rounded-2xl bg-slate-700 text-white tracking-wider">
            <Link to="/newgame">OK</Link>
          </button>
        </div>
      </Modal>
      <Time time={time} onTime={setTime} running={running} />
      <GameMap victory={handleVictory} />
      <Pause />
      <Quit />
    </div>
  );
}
