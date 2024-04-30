import { useEffect } from 'react';

type TimerProp = {
  time: number;
  running?: boolean;
  onTime?: React.Dispatch<React.SetStateAction<number>>;
};

export function Time({ time, running, onTime }: TimerProp) {
  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        onTime?.((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [running, onTime, time]);
  return (
    <div className="flex justify-center text-center">
      <div className="bg-yellow-300 p-6 rounded-2xl animate-pulse ease-linear cursor-default drop-shadow-2xl">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
}
