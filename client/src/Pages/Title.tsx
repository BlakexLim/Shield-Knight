import { Link, Outlet } from 'react-router-dom';

export function Title() {
  return (
    <div className="container flex flex-col items-center m-12 font-serif">
      <div>
        <h1 className="text-6xl/snug bg-red-900 rounded-3xl p-1 text-yellow-400">
          Shield Knight
        </h1>
      </div>
      <div className="hidden m-6">
        <Link to="/login">
          <button className="text-2xl bg-yellow-300 rounded-3xl h-10 w-64">
            Login
          </button>
        </Link>
      </div>
      <div className="hidden m-6">
        <Link to="/sign-up">
          <button className="text-2xl bg-yellow-300 rounded-3xl h-10 w-64">
            New account
          </button>
        </Link>
      </div>
      <div className="hidden m-6">
        <Link to="/controls">
          <button className="text-2xl bg-yellow-300 rounded-3xl h-10 w-64">
            Guest
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
