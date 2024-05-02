import { useCallback, useState } from 'react';
import { GameMap } from './GameMap';
import { Pause } from './Pause';
import { Quit } from './Quit';
import { Time } from './Time';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';
import { Progress, readGuest, saveGuest, updateProgress } from '../lib/data';
import { useUser } from './useUser';

export function Dungeon() {
  const [running, setRunning] = useState(false);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState<Progress>();
  const [isVictory, setIsVictory] = useState(false);
  const { user } = useUser();
  const [guestData, setGuestData] = useState(readGuest());
  const [error, setError] = useState<unknown>();

  const handleGuestData = useCallback(() => {
    saveGuest({ guestTime: time });
    setGuestData(guestData);
    setIsVictory(true);
    setEnd(true);
    setRunning(false);
  }, [guestData, time]);

  function handleReady(): void {
    if (start === true) {
      setStart(false);
      setRunning(true);
    }
  }

  const handleVictory = useCallback(async () => {
    try {
      setIsVictory(true);
      setEnd(true);
      setRunning(false);
      const res = await updateProgress(time);
      setProgress(res);
    } catch (error) {
      setError(error);
    }
  }, [time]);

  const handleDefeat = useCallback(() => {
    setEnd(true);
    setRunning(false);
    setIsVictory(false);
  }, []);

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
      {/* game over modal */}
      <Modal onClose={() => setEnd(false)} isOpen={end && !isVictory}>
        <div className="flex flex-col items-center">
          <h1 className="lg:mt-5 w-3/5 h-1/5 text-center lg:text-5xl md:text-3xl sm:text-lg tracking-widest text-red-700 animate-pulse">
            Game Over
          </h1>
          <button className="pt-1 lg:mt-12 w-1/5 rounded-2xl bg-slate-700 text-white tracking-wider">
            <Link to={'/newgame'}>OK</Link>
          </button>
        </div>
      </Modal>
      {/* victory modal */}
      <Modal onClose={() => setEnd(false)} isOpen={end && isVictory}>
        <div className="flex flex-col items-center">
          <h1 className="lg:mt-5 w-3/5 h-1/5 text-center lg:text-5xl md:text-3xl sm:text-lg tracking-widest text-blue-700 animate-pulse">
            VICTORY
          </h1>
          <div className="flex justify-center items-center md:text-4xl sm:text-lg bg-slate-500 w-2/5 h-32 rounded-2xl">
            {progress?.isBestTime ? (
              <div className="text-yellow-500 text-center md:text-2xl sm:text-lg w-22 h-32 mt-4 rounded-2xl">
                New best!: {progress.bestTime} <br />
                Previous best: {progress.prevBest}
              </div>
            ) : (
              <Time time={time}></Time>
            )}
          </div>
          <button className="pt-1 lg:mt-12 w-1/5 rounded-2xl bg-slate-700 text-white tracking-wider">
            <Link to="/newgame">OK</Link>
          </button>
        </div>
      </Modal>
      <Time time={time} onTime={setTime} running={running} />
      <GameMap
        gameOver={handleDefeat}
        gameOn={running}
        victory={!user ? handleGuestData : handleVictory}
      />
      <Pause />
      <Quit />
    </div>
  );
}
