import { Link, Outlet } from 'react-router-dom';

export function Title() {
  return (
    <div>
      <div>
        <h1>Shield Knight</h1>
      </div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/sign-up">
          <button>New account</button>
        </Link>
      </div>
      <div>
        <Link to="/controls">
          <button>Guest</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
