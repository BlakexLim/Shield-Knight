import { Link, Outlet } from 'react-router-dom';

export function LandingPage() {
  return (
    <>
      <div>
        <h1>Shield Knight</h1>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/sign-up">New account</Link>
      </div>
      <div>
        <Link to="/controls">Guest</Link>
      </div>
      <Outlet />
    </>
  );
}
