import { Link } from 'react-router-dom';

export function NewGame() {
  return (
    <div className="container flex flex-col items-center m-7">
      <div className="m-7">
        <Link to="/intofire">
          <button className="text-2xl bg-yellow-300 rounded-3xl h-10 w-64">
            Continue
          </button>
        </Link>
      </div>
      <div className="m-4">
        <Link to="/intofire">
          <button className="text-2xl bg-yellow-300 rounded-3xl h-10 w-64">
            New Game
          </button>
        </Link>
      </div>
    </div>
  );
}
