import { Link } from 'react-router-dom';

export function Game() {
  function onQuit() {
    alert('are you sure you want to quit?');
  }
  return (
    <div className="flex h-screen">
      <div className="bg-gray-500 w-40 flex flex-col p-2">
        <div className="text-center">
          <div className="bg-yellow-300 p-8 my-20 drop-shadow-2xl">Time</div>
        </div>
        <div className="text-center mt-20">
          <div className="p-3">
            <button className="text-white hover:text-yellow-500">Pause</button>
          </div>
          <div className="p-8">
            <Link to="/">
              <button
                onClick={onQuit}
                className="text-white hover:text-yellow-500 drop-shadow-2xl">
                Quit
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-4/5 h-full bg-white border-solid border-black drop-shadow-2xl">
          Game Map
        </div>
      </div>
    </div>
  );
}
