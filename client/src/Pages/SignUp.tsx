import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center bg-gray-400 h-96 w-80 rounded-2xl">
        <div>
          <h1 className="text-3xl tracking-widest animate-pulse pt-10">
            Create account
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
          <label>
            <Link to="/login">
              <button className="bg-yellow-300 hover:bg-yellow-500 rounded-3xl w-28 drop-shadow-2xl">
                Create account
              </button>
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
}
