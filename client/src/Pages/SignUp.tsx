import { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/shieldKnight/users/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = await res.json();
      console.log('Registered', user);
      alert(
        `Successfully registered ${user.username} as userId ${user.userId}.`
      );
      navigate('/login');
    } catch (err) {
      alert('Error registering user');
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-400 h-96 w-80 rounded-2xl">
        <div>
          <h1 className="text-3xl tracking-widest animate-pulse pt-10">
            Create account
          </h1>
        </div>
        <div className="p-4 text-center drop-shadow-xl w-4/5">
          <h2>Username</h2>
          <label>
            <input required type="text" className="cursor-pointer w-56" />
          </label>
        </div>
        <div className="p-4 text-center drop-shadow-xl w-4/5">
          <h2>Password</h2>
          <label>
            <input required type="text" className="cursor-pointer w-56" />
          </label>
        </div>
        <div className="p-2">
          <label>
            <button className="bg-yellow-300 hover:bg-yellow-500 rounded-3xl w-28 drop-shadow-2xl">
              Create account
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}
