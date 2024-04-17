import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <form className="container flex flex-col items-center bg-gray-400 h-72 w-64 m-7 rounded-2xl">
        <div className="m-2 text-center">
          <label>
            Username
            <input type="text" />
          </label>
        </div>
        <div className="m-2 text-center">
          <label>
            Password
            <input type="text" />
          </label>
        </div>
        <div className="m-3">
          <Link to="/newgame">
            <button className="bg-yellow-300 rounded-2xl p-2 w-28">
              Login
            </button>
          </Link>
        </div>
        <div className="m-7">
          <Link to="/intofire">
            <button className="bg-yellow-300 rounded-3xl p-2">
              Continue as guest
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
