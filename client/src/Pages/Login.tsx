import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Components/useUser';
import { type FormEvent, useState } from 'react';
import { Guest } from './Guest';

export function Login() {
  const { handleSignIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/login', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = await res.json();
      handleSignIn(user, token);
      navigate('/newgame');
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-400 h-96 w-80 rounded-2xl">
        <div>
          <h1 className="text-3xl tracking-widest animate-pulse pt-10">
            Login
          </h1>
        </div>
        <div className="p-4 text-center drop-shadow-xl w-4/5">
          <h2>Username</h2>
          <label>
            <input
              required
              name="username"
              type="text"
              className="p-1 cursor-pointer w-56 rounded-lg font-sans"
            />
          </label>
        </div>
        <div className="p-4 text-center drop-shadow-xl w-4/5">
          <h2>Password</h2>
          <label>
            <input
              required
              name="password"
              type="password"
              className="p-1 cursor-pointer w-56 font-mono rounded-lg tracking-wider"
            />
          </label>
        </div>
        <div className="p-2">
          <button
            disabled={isLoading}
            className="bg-yellow-300 hover:bg-yellow-500 rounded-2xl h-8 w-28 drop-shadow-2xl">
            Login
          </button>
        </div>
        <div className="pt-11">
          <div className="flex justify-center bg-yellow-300 hover:bg-yellow-500 rounded-3xl w-36 drop-shadow-2xl">
            <Link to={'/controls'}>
              <Guest />
              Continue as Guest
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
