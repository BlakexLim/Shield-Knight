import { Link } from 'react-router-dom';

export function NewGame() {
  return (
    <div className="flex flex-col items-center p-3">
      <div className="bg-red-900 rounded-3xl text-yellow-400 text-6xl/relaxed w-1/2 flex justify-center tracking-widest">
        <h1 className="animate-pulse ease-out">Shield Knight</h1>
      </div>
      <div className="pt-8">
        <Link to="/intofire">
          <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-64">
            Continue
          </button>
        </Link>
      </div>
      <div className="m-2">
        <Link to="/intofire">
          <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-64">
            New Game
          </button>
        </Link>
      </div>
    </div>
  );
}
