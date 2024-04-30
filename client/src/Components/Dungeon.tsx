import { useState } from 'react';
import { GameMap } from './GameMap';
import { Pause } from './Pause';
import { Quit } from './Quit';
import { Time } from './Time';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';
import { Progress, updateProgress } from '../lib/data';

export function Dungeon() {
  const [running, setRunning] = useState(false);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState<Progress>();

  const [error, setError] = useState<unknown>();

  function handleReady(): void {
    if (start === true) {
      setStart(false);
      setRunning(true);
    }
  }

  async function handleVictory() {
    try {
      setEnd(true);
      setRunning(false);
      const res = await updateProgress(time);
      setProgress(res);
    } catch (error) {
      setError(error);
    }
  }

  if (error) {
    console.error('Fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-fit h-fit">
      {/* game start modal */}
      <Modal isOpen={start} onClose={() => setStart(false)}>
        <div className="bg-yellow-500 p-3 rounded-2xl">
          <div className="flex flex-col justify-center bg-white rounded-2xl lg:p-12">
            <button
              onClick={handleReady}
              className="lg:text-5xl sm:text-lg text-blue-500 hover:text-blue-800 animate-pulse ease-out">
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
            {progress?.isBestTime && (
              <div className="flex justify-center items-center md:text-4xl sm:text-lg bg-neutral-800 w-2/5 h-32 rounded-2xl">
                new best time:${progress.bestTime}, prev best time:$
                {progress.prevBest}
              </div>
            )}
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
