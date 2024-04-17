import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <form>
        <div>
          <input>Username</input>
        </div>
        <div>
          <input>Password</input>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <Link to="/intofire">
            <button>Continue as guest</button>
          </Link>
        </div>
      </form>
    </>
  );
}
