import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <>
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
    </>
  );
}
