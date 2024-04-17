import { Link } from 'react-router-dom';

export function NewGame() {
  return (
    <>
      <div>
        <Link to="/intofire">
          <button>Continue</button>
        </Link>
      </div>
      <div>
        <Link to="/intofire">
          <button>New Game</button>
        </Link>
      </div>
    </>
  );
}
