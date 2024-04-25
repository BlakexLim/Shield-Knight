import { Link } from 'react-router-dom';

export function NewGame() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="flex justify-center text-center bg-red-900 rounded-3xl text-yellow-400 text-6xl/relaxed w-1/2 tracking-widest">
        <h1 className="animate-pulse ease-out">
          <Link to={'/'}>Shield Knight</Link>
        </h1>
      </div>
      <div className="flex flex-col items-center w-96">
        <div className="pt-8">
          <Link to="/intofire">
            <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-80">
              Continue
            </button>
          </Link>
        </div>
        <div className="p-10">
          <Link to="/controls">
            <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-80">
              New Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
