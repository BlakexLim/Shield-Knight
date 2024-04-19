import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center bg-gray-400 h-96 w-80 rounded-2xl">
        <div>
          <h1 className="text-3xl tracking-widest animate-pulse pt-10">
            Login
          </h1>
        </div>
        <div className="p-4 text-center drop-shadow-xl w-4/5">
          <h2>Username</h2>
          <label>
            <input type="text" className="cursor-pointer w-56" />
          </label>
        </div>
        <div className="p-4 text-center drop-shadow-xl w-4/5">
          <h2>Password</h2>
          <label>
            <input type="text" className="cursor-pointer w-56" />
          </label>
        </div>
        <div className="p-2">
          <Link to="/newgame">
            <button className="bg-yellow-300 hover:bg-yellow-500 rounded-2xl h-8 w-28 drop-shadow-2xl">
              Login
            </button>
          </Link>
        </div>
        <div className="pt-11">
          <Link to="/controls">
            <button className="bg-yellow-300 hover:bg-yellow-500 rounded-3xl w-36 drop-shadow-2xl">
              Continue as guest
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
