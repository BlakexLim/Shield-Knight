import { Link } from 'react-router-dom';

export function Game() {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-500 w-1/7 flex flex-col p-4">
        <div className="text-center">
          <div className="bg-yellow-300 p-5 my-20">Time</div>
        </div>
        <div className="text-center mt-20">
          <div className="p-3">
            <button className="text-white">Pause</button>
          </div>
          <div className="p-3">
            <Link to="/">
              <button className="text-white">Quit</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 flex-grow flex items-center justify-center">
        <div className="w-80 h-80 bg-white">Game Map</div>
      </div>
    </div>
  );
}
