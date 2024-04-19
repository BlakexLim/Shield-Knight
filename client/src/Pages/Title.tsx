import { Link } from 'react-router-dom';

export function Title() {
  return (
    <div className="flex flex-col items-center pt-10 font-custom">
      <div className="bg-red-900 rounded-3xl p-1 text-yellow-400 text-6xl/relaxed w-1/2 flex justify-center tracking-widest">
        <h1 className="animate-pulse ease-out">Shield Knight</h1>
      </div>
      <div className="pt-20 pb-4">
        <Link to="/login">
          <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-64">
            Login
          </button>
        </Link>
      </div>
      <div className="p-4">
        <Link to="/sign-up">
          <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-64">
            New account
          </button>
        </Link>
      </div>
      <div className="p-4">
        <Link to="/controls">
          <button className="text-2xl bg-yellow-300 hover:bg-yellow-500 rounded-3xl h-10 w-64">
            Guest
          </button>
        </Link>
      </div>
    </div>
  );
}
