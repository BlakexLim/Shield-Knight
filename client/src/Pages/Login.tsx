import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col justify-center items-center bg-gray-400 h-1/2 w-1/2 m-7 rounded-2xl">
        <div className="m-2 text-center drop-shadow-xl">
          <h2>Username</h2>
          <label>
            <input type="text" className="cursor-pointer" />
          </label>
        </div>
        <div className="m-2 text-center drop-shadow-xl">
          <h2>Password</h2>
          <label>
            <input type="text" className="cursor-pointer" />
          </label>
        </div>
        <div className="m-2">
          <Link to="/newgame">
            <button className="bg-yellow-300 hover:bg-yellow-500 rounded-2xl w-28 drop-shadow-2xl">
              Login
            </button>
          </Link>
        </div>
        <div className="m-2">
          <Link to="/controls">
            <button className="bg-yellow-300 hover:bg-yellow-500 rounded-3xl w-28 drop-shadow-2xl">
              Continue as guest
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
