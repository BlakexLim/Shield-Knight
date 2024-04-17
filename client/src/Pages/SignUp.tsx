import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <>
      <form action="submit">
        <div>
          <label>
            username
            <input required type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input required type="text" />
          </label>
        </div>
        <div>
          <label>
            <Link to="/login">
              <button>Create account</button>
            </Link>
          </label>
        </div>
      </form>
    </>
  );
}
