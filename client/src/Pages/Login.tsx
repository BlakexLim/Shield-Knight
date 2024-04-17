import { Link } from 'react-router-dom';

export function Login() {
  return (
    <>
      <form action="submit">
        <div>
          <label>
            Username
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="text" />
          </label>
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
